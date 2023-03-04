// importing all components like faceshapes, recommendation and review

import dbConnect from "./dbConnect.js";
const db = dbConnect();
const faceshape = db.collection("faceshape") //faceshape is the collection

export async function getAllFaceshapes(req, res) {
    // const db = dbConnect();
    const { faceshape } = req.params;
    let filter = 
     collection = await faceshape
      .get()
      .catch(err => {
        res.status(500).send(err);
        return;
      });
    const faceshapes = collection.docs
      .map(doc => ({ ...doc.data(), faceshapeId: doc.id }));
    res.send(faceshapes);
  }

  export async function getOneFaceshapeById(req, res) {
    const { faceshapeId } = req.params;
    const db = dbConnect();
    const doc = await faceshape
      .doc(faceshapeId)
      .get()
      .catch(err => {
        res.status(500).send(err);
        return;
      });
    const faceshapes = { ...doc.data(), faceshapeId: doc.id };
    res.send(faceshapes);
  }

  //Get One Faceshape
  