
// BUILDING THE API

//LIBRARIES (using certain librabries)
import functions from "firebase-functions";
import express from "express";
import cors from "cors";
// import { getReviews, getAllReviews } from "./src/function.js";
import { getAllFaceshapes, getOneFaceshapeById } from "./src/recommendation.js"

// USING COR AND EXPRESS FOR API
const app = express()
app.use(cors())
app.use(express.json())

//GET & POST ROUTES FACESHAPE ...
app.get('/faceshape', getAllFaceshapes);
app.get('/faceshape/:faceshapeId', getOneFaceshapeById);  //another get

// //GET RECOMMENDATION
// app.get('/recommendation', getAllRecommendation);
// app.get('/recommendation/ recommendation: Id', getAllRecommendationId); //

// //GET & POST ROUTES REVIEWS ...
// app.get('/reviews', getAllReviews); //gets all reviews from revies that were left
// app.get('/reviews/ review:Id', getReviewId)
// app.post('/reviews', addReviews);  //writes a new review, they send it to the server


//TESTING API
app.get('/test', (req, res) => {
    res.send('you doing it girl');
});

//LISTENING ON
export const api = functions.https.onRequest(app);


//TESTING/unsure //

app.get('/faceshape', (req, res) => {
    res.send(" Faceshape route ies working.💅🏽")
});

