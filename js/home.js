import { auth, onAuthStateChanged, signOut, doc, where, query, collection, setDoc, getDocs, firestore } from "./app.js";

onAuthStateChanged(auth, (user) => {
	if (user) {
		const currentUid = user.uid;
		console.log("User is signed in with UID:", currentUid);

		// Define references to the Firestore collections
		const usersCollection = collection(firestore, "users");
		const certifiCollection = collection(firestore, "certificates");

		// Create a query to filter documents where 'uid' matches the current user's UID.
		const userQuery = query(usersCollection, where("uid", "==", currentUid));

		getDocs(userQuery)
			.then((userQuerySnapshot) => {
				if (!userQuerySnapshot.empty) {
					// User exists, fetch their username
					const username = userQuerySnapshot.docs[0].data().name;
					console.log("Username:", username);
					document.getElementById("user_name").innerHTML = username;
				} else {	
					console.log("No user exists with this UID.");
				}
		})
			.catch((userError) => {
				console.error("Error getting user document:", userError);
			});
	} else {
		console.log("No user is currently authenticated.");
		window.location.href = "index.html";
	}

	// Define references to the Firestore collections
	const currentUid = user.uid;

	const certifiCollection = collection(firestore, "certificates");
	const certifiQuery = query(certifiCollection, where("u_id", "==", currentUid));
	getDocs(certifiQuery)
		.then((certifiQuerySnapshot) => {
			if (!certifiQuerySnapshot.empty) {
				// User exists, fetch their username,hash,uid
				const certifi = certifiQuerySnapshot.docs[0].data().transactionHash;
				const cert_namee=certifiQuerySnapshot.docs[0].data().name;

				console.log("Certificate:", certifi);
				console.log("Certificate:", cert_namee);
				document.getElementById("certificateOutputname").innerHTML =cert_namee ;

				document.getElementById("certificateOutput").innerHTML = certifi;
			} else {	
				console.log("No certificate exists with this UID.");
			}
		}).catch((certifiError) => {
			console.error("Error getting certificate document:", certifiError);
		}
	);
});



// function to logout
function logout() {
	signOut(auth).then(() => {
		// Sign-out successful.
		alert("User Logged Out Successfully");
		window.location.href = "index.html";
	}).catch((error) => {
		// An error happened.
		alert(error.message);
	});
}
document.getElementById("Logout").addEventListener("click", logout);

// web3js code

// //check eth wallet
if (window.ethereum) {
	console.log("MetaMask is installed!");
	const acc = window.ethereum.request({ method: 'eth_requestAccounts' });
	console.log(acc);


}
else {
	console.error("MetaMask not installed!");
}


// Initialize Web3.js
// const web3 = new Web3(window.ethereum); // Replace with your local node's URL

// Initialize web3js on ganche local node
// const web3 = new Web3('http://127.0.0.1:8545');

// const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
const web3 = new Web3(window.ethereum);


// Initialize the contract instance	
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Get the accounts
web3.eth.getAccounts().then(accounts => {
	console.log(accounts);
}
);


async function loadAccounts() {
	try {
		const accounts = await web3.eth.getAccounts();
		return accounts;
	} catch (error) {
		console.error('Error loading Ethereum accounts:', error);
		throw error;
	}
}

//generate the certificate and store it in the blockchain and firebase	//
loadAccounts()
	.then((accounts) => {
		// Now you have access to the Ethereum accounts
		const certificateForm = document.querySelector('#certificateForm');
		certificateForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const name = document.querySelector('#name').value;
			const fromAddress = accounts[0];
			contract.methods.addUser(name).send({ from: fromAddress })
				.then((result) => {
					console.log(result);
					//print only transcation hash
					console.log(result.transactionHash);

					const currentUid = auth.currentUser.uid;
					const hash = result.transactionHash;
					//to store this in firestore
					const certificate = {
						name: name,
						transactionHash: hash,
						u_id: currentUid
					};

					// Add a new document in collection "certificates" with ID 'transactionHash'
					const certifi = collection(firestore, "certificates");
					setDoc(doc(certifi, hash), certificate);


					// document.querySelector('#certificateOutput').innerHTML = `Certificate Generated Successfully`;
					alert("Certificate Generated Successfully");

				})
				.catch((err) => {
					console.log(err.message);
					// document.querySelector('#certificateOutput').innerHTML = `Certificate Generation Failed`;
					alert("Certificate Generation Failed");
				});
		});
	})
	.catch((error) => {
		// Handle errors loading Ethereum accounts
	});

//getting the certificate from the blockchain and firebase
// id="certificateOutput"


