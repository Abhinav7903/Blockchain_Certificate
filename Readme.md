### <a href="https://abhinav7903.github.io/Blockchain_Certificate/" target="_blank"> Demo</a>

# Blockchain Certificate Generation using Web3.js and MetaMask

This is a README file for a blockchain certificate generation application that utilizes Web3.js and integrates with MetaMask for Ethereum wallet interactions. This application allows users to create and store certificates on the Ethereum blockchain, with the certificate details also stored in Firebase Firestore.

## Prerequisites

Before you can use this application, make sure you have the following prerequisites installed and configured:

1. **MetaMask**: Ensure that you have the MetaMask extension installed in your web browser and that you are connected to your Ethereum wallet.

2. **Firebase Firestore**: You should have a Firebase Firestore database set up, as this application uses Firestore to store certificate details.

3. **Web3.js**: This application relies on Web3.js, a JavaScript library for Ethereum interactions. Ensure that you have Web3.js included in your project.

4. **Ethereum Network**: The application is configured to work on the Ethereum network. Make sure you are connected to the desired Ethereum network in MetaMask.

## Installation

To set up and run the application, follow these steps:

1. Clone or download the repository to your local machine.

2. Open the project in your code editor.

3. Ensure that you have included the necessary libraries, including Web3.js, Firebase, and any other dependencies required for your project.

4. Update the `contractAddress` and `contractABI` in the JavaScript code to match your smart contract's address and ABI (Application Binary Interface).

## Usage

### User Authentication

- When a user accesses the application, it checks if the user is authenticated through Firebase Authentication. If not authenticated, the user is redirected to the login page (`index.html`).

### Certificate Generation

- After authentication, the user can generate a certificate by providing a name for the certificate in the form on the web page.

- The application uses MetaMask to interact with the Ethereum wallet to send a transaction to the smart contract, creating a new certificate.

- The transaction hash is stored in the Ethereum blockchain, and the certificate details (name and transaction hash) are stored in Firebase Firestore.

- A success or failure message is displayed to the user.

### Viewing User Details

- The user's username is retrieved from Firestore and displayed on the page.

### Logging Out

- Users can log out by clicking the "Logout" button, which signs them out using Firebase Authentication.

## Customization

You can customize this application to fit your specific requirements:

- Update the smart contract address and ABI to match your deployed smart contract.
- Modify the Firestore database structure to store additional information as needed.
- Customize the user interface (HTML and CSS) to match your branding and design preferences.

## Troubleshooting

If you encounter any issues while using the application, refer to the following tips:

- Ensure that MetaMask is installed and connected to the correct Ethereum network.

- Check the browser console for any error messages or logs that might help diagnose the problem.

- Verify that your Firebase Firestore database is properly configured and accessible.

- Review the smart contract code and ensure that it matches the ABI and address used in the application.


## Acknowledgments

- This application was developed using Web3.js for Ethereum interactions and Firebase Firestore for data storage.

- Special thanks to the MetaMask team for their excellent documentation and support for Ethereum wallet integration.
