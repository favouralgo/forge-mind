import { initializeApp, getApps, App, getApp, cert } from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

const serviceKey = require("@service_key.json");

let app: App;
if (getApps().length === 0) {
      app = initializeApp({
        credential: cert(serviceKey)
      });
    } else {
      app = getApp();
    }
const admindb = getFirestore(app);
export { app as adminApp, admindb };