// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
/**
 * Environment for development builds
 */
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM",
    authDomain: "g-drive-sorter-2.firebaseapp.com",
    databaseURL: "https://g-drive-sorter-2.firebaseio.com",
    projectId: "g-drive-sorter-2",
    storageBucket: "g-drive-sorter-2.appspot.com",
    messagingSenderId: "362606538820"
  }
};