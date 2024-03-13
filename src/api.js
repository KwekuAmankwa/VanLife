import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAOhFnMRqWaZrfW9ntsiQSwWFDjdMRIf2o",
  authDomain: "vanlife-95067.firebaseapp.com",
  projectId: "vanlife-95067",
  storageBucket: "vanlife-95067.appspot.com",
  messagingSenderId: "658493220540",
  appId: "1:658493220540:web:ea146f27de6217755712b9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")


export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArray = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id
    }))
    return dataArray
}


export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function loginUser(creds) {
    const email = creds.email
    const password = creds.password

    
    const q = query(collection(db, "user"), where("email", "==", email), where("password", "==", password));

    const querySnapshot = await getDocs(q);

   querySnapshot.forEach((doc) => {
        return doc.data()

    })
    return querySnapshot
}
