const _0x41cabc=_0x558a;(function(_0x39d307,_0x19122e){const _0x841f00=_0x558a,_0x2d5335=_0x39d307();while(!![]){try{const _0x220025=parseInt(_0x841f00(0x141))/0x1+-parseInt(_0x841f00(0x145))/0x2*(parseInt(_0x841f00(0x140))/0x3)+-parseInt(_0x841f00(0x13a))/0x4+-parseInt(_0x841f00(0x13c))/0x5+-parseInt(_0x841f00(0x13d))/0x6*(-parseInt(_0x841f00(0x139))/0x7)+parseInt(_0x841f00(0x138))/0x8+-parseInt(_0x841f00(0x146))/0x9*(-parseInt(_0x841f00(0x143))/0xa);if(_0x220025===_0x19122e)break;else _0x2d5335['push'](_0x2d5335['shift']());}catch(_0x85fb5e){_0x2d5335['push'](_0x2d5335['shift']());}}}(_0x7c28,0x74ee3));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js';import{getAnalytics}from'https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js';function _0x558a(_0x18fd25,_0xb62f56){const _0x7c2868=_0x7c28();return _0x558a=function(_0x558a99,_0x47372e){_0x558a99=_0x558a99-0x138;let _0x55309d=_0x7c2868[_0x558a99];return _0x55309d;},_0x558a(_0x18fd25,_0xb62f56);}import{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,sendPasswordResetEmail,signInWithPopup,signInWithRedirect,GoogleAuthProvider}from'https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js';import{getStorage,deleteObject,ref,uploadBytes,getDownloadURL,getMetadata,listAll}from'https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js';import{getDatabase,ref as _0x57fa0f,push,get,onValue,remove,child}from'https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js';function _0x7c28(){const _0x1087ff=['707204979319','4190405xXNdMm','6qyFvNa','blockchain-7474c.firebaseapp.com','blockchain-7474c','771wlcXlG','700980NVIwvd','blockchain-7474c.appspot.com','9650QVynPh','1:707204979319:web:54680f14be9137ed9c4472','2150utJbHb','927YAcfPH','6056568EYRRBF','1343503YCibcr','624288cXEdNw'];_0x7c28=function(){return _0x1087ff;};return _0x7c28();}import{getFirestore,collection,setDoc,getDocs,addDoc,doc,deleteDoc,updateDoc,query,where,orderBy,limit}from'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js';const firebaseConfig={'apiKey':'AIzaSyC5Q7XR93fW-7raAdNxakqrZlaJnwEqAvs','authDomain':_0x41cabc(0x13e),'projectId':_0x41cabc(0x13f),'storageBucket':_0x41cabc(0x142),'messagingSenderId':_0x41cabc(0x13b),'appId':_0x41cabc(0x144),'measurementId':'G-9QMYG16RPW'},app=initializeApp(firebaseConfig),analytics=getAnalytics(app),auth=getAuth(app),storage=getStorage(app),database=getDatabase(app),firestore=getFirestore(app);export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,collection,setDoc,doc,where,getDocs,query,firestore,onAuthStateChanged};