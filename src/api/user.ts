import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { httpsCallable, getFunctions } from "firebase/functions";
import { firestore } from "../firebase-config";
import { NewUser } from "../types/user";

const usersCollectionRef = collection(firestore, "users");

export function getUsers(): Promise<any> {
  return getDocs(usersCollectionRef)
    .then((data) => data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    .catch((err) => err);
}

export function getUser(userId: string): Promise<any> {
  const docRef = doc(firestore, "users", userId);

  return getDoc(docRef)
    .then((docSnap) => {
      const data = docSnap.data();
      if (data) {
        return data;
      }
      throw new Error("User not found");
    })
    .catch((err) => err);
}

export function createUser(user: NewUser): Promise<any> {
  return httpsCallable(getFunctions(), "addUser")(user);
}
