import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, Timestamp, collection, getDocs } from "firebase/firestore";
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

  // Add a new document in collection 
const newOrder = async(table, customer, order, state, id) => {
   await setDoc(doc(db, "orders", id), {
    orderId: id,
    customer: customer,
    table: table,
    time: Timestamp.fromDate(new Date()),
    items: order,
    state: state,
  });
}
  // Get data
const getOrders = async() => {
  const querySnapshot = await getDocs(collection(db, "orders"));
  const ordersData = []
  querySnapshot.forEach((order) => {
   ordersData.push(order.data())
  })
  return ordersData
}

export {newOrder, getOrders}