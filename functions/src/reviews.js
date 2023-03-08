import dbConnect from "./dbConnect.js";``
const collectionName = "reviews"


export async function addReview (req, res) { //create
    const db =  dbConnect()
   const newReview = req.body
 // newFaceshape.updateAt=FieldValue.serverTimestamp()
 await db.collection(collectionName).add(newReview)
 res.status(202).send({ message: "Review Added"});
}

export async function  getAllReviews(req, res) { //read and getall
    const db = dbConnect()
    const collection = await db.collection('reviews')
    .get()
    const reviews = collection.docs.map(doc => ({ ...doc.data(), reviewId: doc.id }));
  res.send(reviews)
  }

  export async function getByReviews(req, res) { //read and get one
    const db = dbConnect()
    const { reviewId } = req.params;
    const doc = await db.collection(collectionName).doc(reviewId).get()
    const reviews = doc.data()
    res.send(reviews);
  }