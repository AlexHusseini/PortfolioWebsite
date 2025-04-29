import { app, analytics } from './lib/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Example: Initialize Firestore
const db = getFirestore(app);

// Example: Function to fetch data from Firestore
async function fetchData() {
  try {
    const querySnapshot = await getDocs(collection(db, 'your-collection'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function
fetchData(); 