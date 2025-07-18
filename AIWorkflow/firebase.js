// AIWorkflow/firebase.js
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const firebaseConfig = {
  credential: applicationDefault(),
  projectId: "lifesync-3cb2f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };
