// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBXYqXPkm90ZRmMuS3iNDSEQhdjiZVNg7Y",
    authDomain: "agencevoyage-1775c.firebaseapp.com",
    projectId: "agencevoyage-1775c",
    storageBucket: "agencevoyage-1775c.firebasestorage.app",
    messagingSenderId: "549657678943",
    appId: "1:549657678943:web:78096599f57ad94ea2f7ea",
    measurementId: "G-93436Y1LV1",
    databaseURL: "https://agencevoyage-1775c-default-rtdb.firebaseio.com/"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
