// importing all components like faceshapes, recommendation and review
// import { FieldValue } from "firebase-admin/firestore";
import dbConnect from "./dbConnect.js";``
//faceshape is the collection

const collectionName = "faceshape"
// export function faceshapeId(req, res) {
  //   const db = dbConnect();
  //   db.collection('shapes').get()
  //   .then(collection => {
    //     const shape = collection.docs.map(doc => doc.data())
    //     res.send(shape)
    //   })
    //   .catch(err => res.status(500).send({ success: false, message: err}))
    // }
    
    export async function addFaceshape (req, res) {
         const db =  dbConnect()
        const newFaceshape = req.body
      // newFaceshape.updateAt=FieldValue.serverTimestamp()
      await db.collection(collectionName).add(newFaceshape)
      res.status(202).send({ message: "Faceshape Added"});
    }
    
    export async function  getAllFaceshapes(req, res) {
      const db = dbConnect()
      const collection = await db.collection('faceshape')
      .get()
      const faceshapes = collection.docs.map(doc => ({ ...doc.data(), faceshapeId: doc.id }));
    res.send(faceshapes)
    }

export async function getByFaceshape(req, res) {
  const db = dbConnect()
  const { faceshapeId } = req.params;
  const doc = await db.collection(collectionName).doc(faceshapeId).get()
  const faceshape = doc.data()
  res.send(faceshape);
}

// app.get('/faceshapes', async (req, res) => {
//   const querySnapshot = await admin.firestore().collection('faceshape').get();
//   const faceshapes = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   res.json(faceshapes);
// });

// export async function getOne(req, res) {
//   const db = dbConnect();
//   db.collection('faceshape');
//   const { faceshapeId } = req.query;
  
//   const snapshot = await collection.where('faceshapeId', '==', faceshapeId).get();
//   const result = snapshot.docs.map(doc => doc.data());
  
//   res.send(result);
// }

// // Get faceshape by faceshapeId
// export async function getOneFaceshape(req, res) {
//   const { faceshapeId } = req.params;
  
//   try {
//     const snapshot = await db.collection('faceshape').doc(faceshapeId).get();
//     const faceshapeData = snapshot.data();
    
//     if (!faceshapeData) {
//       res.status(404).send({ message: "Faceshape not found" });
//     } else {
//       res.send(faceshapeData);
//     }
//   } catch (e) {
//     console.error("Error fetching document: ", e);
//     res.status(500).send({ error: e.message });
//   }
// }

// // Get all faceshapes
// export async function getAllFaceshapes(req, res) {
//   const { shape } = req.query;
//   let query = db.collection('faceshape');
  
//   if (shape) {
//     query = query.where('shape', '==', shape);
//   }
  
//   try {
//     const querySnapshot = await query.get();
//     const faceshapes = querySnapshot.docs.map((doc) => doc.data());
//     res.send(faceshapes);
//   } catch (e) {
//     console.error("Error fetching documents: ", e);
//     res.status(500).send({ error: e.message });
//   }
// }



// //get //provided shape param ?
// import { collection, query, where, getDocs } from "firebase/firestore";

// const db = dbConnect(); //initialize your Firestore instance

// export async function getByFaceshape(req, res) {
//   const { faceshapeId } = req.params;

//   const q = query(collection(db, "faceshape"), where("faceshapeId", "==", faceshapeId));

//   try {
//     const querySnapshot = await getDocs(q);
//     const shapeFaceshapes = querySnapshot.docs.map((doc) => doc.data());
//     res.send(shapeFaceshapes);
//   } catch (e) {
//     console.error("Error fetching document: ", e);
//     res.status(500).send(e);
//   }
// }





// //getAll

// async function getAllFaceshapes() {
//   const response = await get('https://final-project-ireccostyle-api.web.app/faceshapes');
//   const faceshapes = await response.json();
//   return faceshapes;
// }
// // export async function getAllFaceshapes(req, res) {
// //   const db = await dbConnect()
// //   // this connects to the database
// //   db.collection('faceshape').get() //getting collection by fcaeshape
// //   .then (collection => {
// //     const faceshape = collection.docs.map(doc => ({faceshapeId: doc.id, ...doc.data()}))
// //     res.send(faceshape)
// //   })
   
//       // collection => {
//       // const faceshapes = collection.docs.map(doc => ({ faceshapesId: doc.id, ...doc.data() }))
//       // res.send(faceshapes)
//       // // once the collection comes back, this anon function will run that will use the param doc to map through all the docs of the notes collection, then runs another anon function that sets the key notesId: to the value of the doc.id, and sends back the data of the doc in question
//     // }
//     // error handling
// //     .catch(err => res.status(500).json({ error: err.message }))
// // }



// add post

// //delete
// export async function deleteFaceshape(req, res) {
//   const {faceshapesId} = req.params
//   const db = await dbConnect()
//   db.collection('faceshape').doc(faceshapesId).delete()
//   .then(() => getAllFaceshapes(req, res))
//   .catch(err => res.status(500).json({ error: err.message}))
// }




// // const collection = await db
// //   .collection('faceshape')
// //   .insertOne(newFaceshape)
// //   .catch(err => {
// //     res.status(500).send(err);
// //     return;
// //   })

//get all 