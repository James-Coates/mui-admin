import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import {
  auth,
  createUserWithEmailAndPassword,
  firestore,
} from "../firebase-config";
import { User } from "../types/user";

const usersCollectionRef = collection(firestore, "users");

export function getUsers(): Promise<any> {
  return getDocs(usersCollectionRef)
    .then((data) => data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    .catch((err) => err);
}

export function createUser(
  user: Omit<User, "id">,
  password: string
): Promise<any> {
  return createUserWithEmailAndPassword(user.email, password).then(
    (userCredentials) => {
      return setDoc(doc(firestore, "users", userCredentials.user.uid), user);
    }
  );
}
