// IMPORTING INDIVDUAL LIBRABIRES
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { service_account } from "../service_account.js";

//JS FIRESTORE CONNECTION before anyone can access the library you must have a cert(card/id)
export default function dbConnect () {
    if(!getApps().length) {// if not account is found
        initializeApp ({
            credential: cert(service_account),//create one
        })
    }
    return getFirestore();
}