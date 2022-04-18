import { collection, getDocs } from "firebase/firestore";
import { httpsCallable, getFunctions } from "firebase/functions";
import { firestore } from "../firebase-config";
import { NewUser } from "../types/user";

const usersCollectionRef = collection(firestore, "users");
const functions = getFunctions();
const addUser = httpsCallable(functions, "addUser");

export function getUsers(): Promise<any> {
  return getDocs(usersCollectionRef)
    .then((data) => data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    .catch((err) => err);
}

export function createUser(user: NewUser): Promise<any> {
  return httpsCallable(getFunctions(), "addUser")(user);
  // fetch("https://us-central1-mui-admin.cloudfunctions.net/addUser", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(user),
  // });
}
