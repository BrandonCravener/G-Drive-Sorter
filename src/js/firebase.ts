const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')

const firebaseConfig = {
  apiKey: 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
  authDomain: 'g-drive-sorter-2.firebaseapp.com',
  databaseURL: 'https://g-drive-sorter-2.firebaseio.com',
  projectId: 'g-drive-sorter-2',
  storageBucket: 'g-drive-sorter-2.appspot.com',
  messagingSenderId: '362606538820'
}

export function init() {
  firebase.initializeApp(firebaseConfig)
}

export function createConifg(newConfig: Object) {
  return firebase
    .database()
    .ref('/users/' + firebase.auth().currentUser.uid + '/config/')
    .push(newConfig)
}

export function getClasses() {
  return firebase
    .database()
    .ref(`/users/${firebase.auth().currentUser.uid}`)
    .child('config')
    .limitToFirst(10)
    .once('value')
}

export function signinWithCredential(idToken: String) {
  let credentials = firebase.auth.GoogleAuthProvider.credential(idToken)
  return firebase.auth().signInWithCredential(credentials)
}

export function deleteUser() {
  return firebase.auth().currentUser.delete()
}