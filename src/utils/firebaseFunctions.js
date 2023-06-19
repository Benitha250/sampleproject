import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

// saving new items
export const saveItem = async (data) => {
    await setDoc(doc(firestore, "gasItems", `${Date.now()}`), 
    data, {merge : true,}
    );
};


// fetch all gas items

export const getAllGasItems = async () => {
    const items = await getDocs(
        query(collection(firestore, "gasItems"), orderBy("id", "desc"))
    );

    return items.docs.map((doc) => doc.data());
};

