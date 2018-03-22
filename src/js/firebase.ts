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


