import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, Timestamp } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBq58JGX4myrbrc9xVdtEfUdKySszHo6h0",
    authDomain: "purrfect-cafe-c2bc4.firebaseapp.com",
    projectId: "purrfect-cafe-c2bc4",
    storageBucket: "purrfect-cafe-c2bc4.appspot.com",
    messagingSenderId: "1001814879104",
    appId: "1:1001814879104:web:da02033d59e150fbe7af65"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Add a new document in collection "cities"
const newOrder = async(table, customer, order, state) => {
   await setDoc(doc(db, "orders", customer), {
    customer: customer,
    table: table,
    time: Timestamp.fromDate(new Date()),
    items: order,
    state: state,
  });
}

export {newOrder}