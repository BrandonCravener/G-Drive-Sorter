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
  constructor(public google: GoogleService) {}

  private calculateStart(page: number, pageSize: number): number {
    return (page ? page * pageSize:0);
  }

  getNumConfigs() {
    return firebase
      .database()
      .ref(`/users/${firebase.auth().currentUser.uid}/config/`)
      .once('value')
  }

  getUserConfigs(page: number, pageSize: number): Promise<firebase.database.DataSnapshot> {
    const startEnd = this.calculateStart(page, pageSize);
    return firebase
      .database()
      .ref(`/users/${firebase.auth().currentUser.uid}/config/`)
      .orderByKey()
      .startAt(String(startEnd))
      .limitToFirst(pageSize)
      .once('value');
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

  init() {
    // Intialize Firebase
    firebase.initializeApp(environment.firebase)
    
    this.signInWithCredential();

    this.google.authState$.subscribe(state => {
      if (!state) {
        firebase.auth().signOut();
      } else {
        this.signInWithCredential();
      }
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user && !this.google.getAuthStatus()) {
        this.google.signIn();
      } else if (!user && this.google.getAuthStatus()) {
        this.google.signOut();
      }
    })
  }
}
