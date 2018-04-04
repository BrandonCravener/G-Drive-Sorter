import { Injectable } from "@angular/core";

// Firebase imports
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { environment } from "../../../environments/environment";

import { GoogleService } from "../google/google.service";

/**
 * Utility service to manage all Firebase interactions
 * 
 * @export
 * @class FirebaseService
 */
@Injectable()
export class FirebaseService {

  /**
   * Creates an instance of FirebaseService.
   * @param {GoogleService} google Reference to Google Service
   * @memberof FirebaseService
   */
  constructor(public google: GoogleService) {
    // Intialize Firebase
    firebase.initializeApp(environment.firebase)
    
    this.signInWithCredential();

    google.authState$.subscribe(state => {
      if (!state) {
        firebase.auth().signOut();
      } else {
        this.signInWithCredential();
      }
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user && !google.getAuthStatus()) {
        google.signIn();
      } else if (!user && google.getAuthStatus()) {
        google.signOut();
      }
    })
  }

  /**
   * Check if theres a google but not firebase user signed in
   * 
   * @memberof FirebaseService
   */
  signInWithCredential() {
    if (!firebase.auth().currentUser && this.google.getAuthStatus()) {
      const credential = firebase.auth.GoogleAuthProvider.credential(this.google.getToken());
      firebase.auth().signInWithCredential(credential);
    }
  }
}
