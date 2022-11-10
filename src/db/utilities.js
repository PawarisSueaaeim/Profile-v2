import { db } from "./db";
import { collection, getDocs, addDoc} from "firebase/firestore";

export function addComment(data) {
  return addDoc(collection(db, 'comment'), data).then((docRef) => {
    console.log(`Successfully added comment id: ${docRef.id}`);
  });
}

export function getComment() {
  return getDocs(collection(db, 'comment')).then((querySnapshot) => {
      const comment = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        comment.push(data);
      });
      return comment;
    });
}
