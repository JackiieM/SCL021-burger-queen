import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, Timestamp, collection, getDocs, query, orderBy, getDoc, deleteDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDHucOe1GgiZjkkHdHJsaG9ovLdNeQku3k",
  authDomain: "purrfect-cat-cafe.firebaseapp.com",
  projectId: "purrfect-cat-cafe",
  storageBucket: "purrfect-cat-cafe.appspot.com",
  messagingSenderId: "905990600001",
  appId: "1:905990600001:web:f6c48032ab7c00062e1dc0"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Add a new order to the collection 
const newOrder = async(table, customer, order, state, id) => {
   await setDoc(doc(db, "orders", id), {
    orderId: id,
    customer: customer,
    table: table,
    date: Timestamp.fromDate(new Date()),
    items: order,
    state: state,
  });
}
  // Get data
const getOrders = async() => {
  const ordersData = []
  const allPendingOrders = query(collection(db, "orders"), orderBy('date', 'asc'))
  const querySnapshot = await getDocs(allPendingOrders);
  querySnapshot.forEach((order) => {
   ordersData.push(order.data())
  })
  return ordersData
}

const getSelectedOrder = async(id) => {
  const docRef = doc(db, "orders", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data()
}

const orderReady = async(order, time, state) => {
  await setDoc(doc(db, "readyToServe", order.orderId), {
   orderId: order.orderId,
   customer: order.customer,
   table: order.table,
   date: Timestamp.fromDate(new Date()),
   items: order.items,
   state: state,
   cooking: time,
 });
}

const deleteSelectedOrder = async(id) => {
  await deleteDoc(doc(db, "orders", id));
}

const getReadyToServe = async() => {
  const ordersData = []
  const allPendingOrders = query(collection(db, "readyToServe"), orderBy('date', 'asc'))
  const querySnapshot = await getDocs(allPendingOrders);
  querySnapshot.forEach((order) => {
   ordersData.push(order.data())
  })
  return ordersData
}


export {newOrder, getOrders, orderReady, getSelectedOrder, deleteSelectedOrder, getReadyToServe}