import dbConnect from "./dbConnect.js";
// const collectionName = "reviews"
// const db = await getFirestoreInstance();


export async function addReview (req, res) { //create
    const db =  dbConnect()
    const newReview = req.body;
  // const db = await getFirestoreInstance();

  db.collection("reviews")
  .add(newReview)
  .then(() => getAllReviews(req, res))
  .catch((err) => res.send(500).send({ error: err.message }));
//  await db.collection(collectionName).add(review)
//  res.status(202).send({ message: "Review Added"});
}

export async function  getAllReviews(req, res) { //read and getall
    const db = dbConnect()
    // const collection = await db.collection('reviews')
    db.collection("reviews")
    // .orderBy("reviews") //"created at?"
    .get()
    .then((collectionName) => {
      const reviews = collectionName.docs.map((element) => ({
        reviews: element.id,
        ...element.data(),
      }));
      // const reviews = collection.docs.map(doc => ({ ...doc.data(), reviewId: doc.id }));
   res.send(reviews);
   })
   .catch((err) => res.status(500).json({ error: err.message }));
  }

  // export async function getByReviews(req, res) { //read and get one
  //   const db = dbConnect()
  //   const { reviewId } = req.params;
  //   const doc = await db.collection(collectionName).doc(reviewId).get()
  //   const reviews = doc.data()
  //   res.send(reviews);
  // }