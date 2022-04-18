import { userSchema } from "./schema/user";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const addUser = functions.https.onCall(async (data, context) => {
  const userToAdd = data;
  const validation = userSchema.validate(userToAdd);

  const {
    error,
    value: { password, ...validatedUser },
  } = validation;

  if (!error) {
    const writeResult = await admin
      .firestore()
      .collection("users")
      .add(validatedUser)
      .then(async (userRef) => {
        return admin.auth().createUser({
          uid: userRef.id,
          email: validatedUser.email,
          password: password,
        });
      });

    return { result: `Message with ID: ${writeResult.uid} added.` };
  }
  throw new functions.https.HttpsError(
    "unknown",
    validation.error ? validation.error.message : "Unkown error"
  );
  // res.status(400).json(validation.error);
});
