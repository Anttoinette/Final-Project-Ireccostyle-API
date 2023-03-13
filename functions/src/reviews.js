import dbConnect from "./dbConnect.js";
import { FieldValue } from "firebase-admin/firestore";
// const collectionName = "reviews"
// const db = await getFirestoreInstance();


// export async function addReview (req, res) { //create
//     const db = await dbConnect()
//     const { reviews } = req.body;
//     // const newReview = reviews
//     const newReview = JSON.parse(JSON.stringify(reviews));
//     console.log(newReview)
//     db.collection('reviews').add(newReview)
//     .then(() => getAllReviews(req, res))
//     .catch(err => res.status(500).json({ error: err.message }))
//   // db.collection("reviews")
//   // .add(newReview)
//   // .then(() => { 
//   //   getAllReviews(req, res) 
//   // })
//   // .catch((err) => res.send(500).send({ error: err.message }));
// //  await db.collection(collectionName).add(review)
// //  res.status(202).send({ message: "Review Added"});
// }

export async function addReview(req,res) {
  const {newReview} = req.body  // deconstructing newReview from req.body
  const newReview2 = {newReview, createdAt: FieldValue.serverTimestamp()}
  console.log(newReview2)
  const db = await dbConnect()
  db.collection('reviews')
  .add(newReview2)
  .then( () => getAllReviews(req,res) ) // we are running the getallreview function
  .catch(err => res.status(500).send({error: err.message}))
}

// export async function  getAllReviews(req, res) { //read and getall
//   const db = await dbConnect()
//   // const collection = await db.collection('reviews')
//   db.collection("reviews")
//   // .orderBy("reviews") //"created at?"
//   .get()
//   .then(collection => {
//     const reviews = collection.docs.map((element) => ({
//       reviewsId: id,
//       ...element.data()
//     }));
//     // const reviews = collection.docs.map(doc => ({ ...doc.data(), reviewId: doc.id }));
//     console.log(reviews)
//   res.send(reviews);
//  })
//  .catch((err) => res.status(500).json({ error: err.message }));
// }

export async function getAllReviews(req, res){
  const db = await dbConnect()
  db.collection('reviews')
  .orderBy('createdAt', 'desc') //descending order
  .get()
  .then(collection => {
      const content = collection.docs.map(doc => ({reviewId: doc.id, ...doc.data()}))
      res.send(content)
  })
  .catch(err => res.status(500).json({error: err.message}))
}


// export async function  getAllReviews(req, res) { //read and getall
//     const db = await dbConnect()
//     db.collection("reviews")
//     .get()
//     .then(collection  => { 
//     const review = collection.docs.map(doc => ({ reviewId: doc.id(), ...doc.data() }))
//     res.send(review);
//       // const reviews = collection.docs.map((doc) => ({
//       //   id: doc.id,
//       //   ...doc.data(),
//       })
//    .catch((err) => res.status(500).json({ error: err.message }))
//   }

  export async function getByReviews(req, res) { //read and get one
    const db = dbConnect()
    const { reviewId } = req.params; // what does this mean?
    db.collection("reviews") 
    .doc(reviewId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const review = { id: doc.id, ...doc.data() };
        res.send(review);
      } else {
        res.status(404).send({ message: "Review not found" });
      }
      }
    )  
    res.send(reviews);
  }