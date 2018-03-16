// Browserify / Typescript imports
const utils = require('./utils.ts')

// Variables
var Google
var google
var googleUser
var folderPicker
var Materialize = window.M
var Stepper = window.Stepper
var Firebase = window.firebase
var apiKey = 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM'
var firebaseConfig = {
  apiKey: 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
  authDomain: 'g-drive-sorter-2.firebaseapp.com',
  databaseURL: 'https://g-drive-sorter-2.firebaseio.com',
  projectId: 'g-drive-sorter-2',
  storageBucket: 'g-drive-sorter-2.appspot.com',
  messagingSenderId: '362606538820'
}

// Counting variables
var removeLoaderCallCount = 0

// Elements
var tabs = document.querySelector('.tabs')
var sidenav = document.getElementById('slide-out')
var parallax = document.querySelector('.parallax')
var dropdown = document.querySelector('.dropdown-trigger')
var logoutButton = document.getElementById('logout-button')
var loadingOverlay = document.getElementById('loading-overlay')
var newConfigModal = document.getElementById('new-config-modal')
var datepicker0 = document.getElementById('sorting-datepicker-0')
var timepicker0 = document.getElementById('sorting-timepicker-0')
var datepicker1 = document.getElementById('sorting-datepicker-1')
var timepicker1 = document.getElementById('sorting-timepicker-1')
var loaderBackground = document.getElementById('loader-background')
var sortingTextField = document.getElementById('sorting-text-field')
var sortingEmailField = document.getElementById('sorting-email-field')
var deleteAccountButton = document.getElementById('button-delete-account')
var sortingTypeDropdown = document.getElementById('sorting-type-dropdown')
var folderPickerButton = document.getElementById('button-pick-drive-folder')
var sortingFileTypeDropdown = document.getElementById('sorting-file-type-dropdown')
var sortingConstraintDropdown = document.getElementById('sorting-constraint-dropdown')

// Define stepper with config
var stepper = new Stepper(document.getElementById('config-stepper'), {
  linear: true,
  invalidClass: 'invalid',
  completionCallback: () => {
    var newConfig = {groups: {}}
    var configurationName = document.getElementById('new-config-name').value
    var groupName = document.getElementById('new-group-name').value
    var sortingClassifier = sortingTypeDropdown.value
    var sortingConstraint = sortingConstraintDropdown.value
    // Set the name of the new configuration
    newConfig['name'] = configurationName
    // Set the constraint and classifier type of the configuration as well as the data
    newConfig['groups'][groupName] = {
      classifier: sortingClassifier,
      constraint: sortingConstraint,
      data: {
      }
    }
  }
})

function removeLoader () {
  removeLoaderCallCount += 1
  if (removeLoaderCallCount === 2) {
    if (loadingOverlay) {
      loaderBackground.classList.add('shrink')
      loadingOverlay.classList.add('fade')
      setTimeout(function () {
        loadingOverlay.parentNode.removeChild(loadingOverlay)
      }, 800)
    }
  }
}

function userAuthentication (authenticated) {
  if (authenticated) {
    googleUser = Google.auth2.getAuthInstance().currentUser.get()
    utils.hide('.no-auth')
    utils.show('.auth')
    if (googleUser) {
      window.user = googleUser
      var idToken = googleUser.getAuthResponse().id_token
      var credentials = Firebase.auth.GoogleAuthProvider.credential(idToken)
      Firebase.auth().signInWithCredential(credentials).then(function (user) {
        if (user) {
          document.getElementById('prof-img').setAttribute('src', user.photoURL)
          document.getElementById('prof-name').textContent = user.displayName
          document.getElementById('prof-email').textContent = user.email
        }
      })
    }
  } else {
    utils.hide('.auth')
    utils.show('.no-auth')
  }
  removeLoader()
}

function folderPicked (data) {
}

// Initialize the Firebase app
Firebase.initializeApp(firebaseConfig)

// MaterializeCSS initialization
Materialize.Sidenav.init(sidenav)
Materialize.Dropdown.init(dropdown, {
  coverTrigger: false,
  alignment: 'right'
})
Materialize.Datepicker.init(datepicker0)
Materialize.Timepicker.init(timepicker0)
Materialize.Datepicker.init(datepicker1)
Materialize.Timepicker.init(timepicker1)
Materialize.Parallax.init(parallax)
Materialize.Tabs.init(tabs)
Materialize.Modal.init(newConfigModal)

// Initialize stepper
stepper.initialize()

// Get all of the login buttons
utils.applyToElements('.login-button', function (element) {
  // Apply a click listener to the button
  element.addEventListener('click', function () {
    // Login to the app with Google
    Google.auth2.getAuthInstance().signIn()
  })
})

// Add click listener to logout button
utils.click(logoutButton, () => {
  // Log the user out
  Google.auth2.getAuthInstance().signOut()
})

// Add click listener to the delete account button
utils.click(deleteAccountButton, () => {
  // Delete the firebase user
  Firebase.auth().currentUser.delete().then(function () {
    // Disconnect the app form the users Google account
    Google.auth2.getAuthInstance().disconnect()
    // Sign the user out of their account
    Google.auth2.getAuthInstance().signOut()
  })
})

// Add change listener to sorting dropdown
utils.change(sortingTypeDropdown, element => {
  var constraintBetweenOption = sortingConstraintDropdown.lastElementChild
  // Disable the between option by default
  constraintBetweenOption.setAttribute('disabled', true)
  // Show the constraint select
  sortingConstraintDropdown.parentNode.classList.remove('hidden')
  // Hide all the constraint fields
  sortingTextField.parentNode.parentNode.classList.add('hidden')
  sortingEmailField.parentNode.parentNode.classList.add('hidden')
  datepicker0.parentNode.parentNode.classList.add('hidden')
  timepicker0.parentNode.parentNode.classList.add('hidden')
  datepicker1.parentNode.parentNode.classList.add('hidden')
  timepicker1.parentNode.parentNode.classList.add('hidden')
  folderPickerButton.parentNode.classList.add('hidden')
  // Check if the between constraint selected
  if (element.target.value !== '5') {
    timepicker0.parentNode.className = 'input-field col s12 m5 l3'
    datepicker0.parentNode.className = 'input-field col s12 m5 l3'
  }
  // Switch between the possible sorting types
  switch (Number(element.target.value)) {
    // Title | Text
    case 1:
      // Show text field
      sortingTextField.parentNode.parentNode.classList.remove('hidden')
      break
      // Type | Dropdown
    case 2:
      // Show the file type dropdown
      sortingFileTypeDropdown.parentNode.classList.remove('hidden')
      break
      // Location | Folder Picker
    case 3:
      folderPickerButton.parentNode.classList.remove('hidden')
      break
      // Owner | Name / Email
    case 4:
      // Show the needed fields
      sortingTextField.parentNode.parentNode.classList.remove('hidden')
      sortingEmailField.parentNode.parentNode.classList.remove('hidden')
      break
      // Creation Date | Date Picker
    case 5:
      // Show the between constraint
      constraintBetweenOption.removeAttribute('disabled')
      // Show the needed fields
      datepicker0.parentNode.childNodes[4].textContent = 'Creation Date'
      datepicker0.parentNode.parentNode.classList.remove('hidden')
      timepicker0.parentNode.className = 'input-field col s0 m0 l0 hidden'
      datepicker0.parentNode.className = 'input-field col s12 m 10 l6'
      break
      // Last Opened | Date & Time Picker
    case 6:
      // Show the between constraint
      constraintBetweenOption.removeAttribute('disabled')
      // Show the needed fields
      datepicker0.parentNode.childNodes[4].textContent = 'Opened Date'
      datepicker0.parentNode.parentNode.classList.remove('hidden')
      timepicker0.parentNode.childNodes[4].textContent = 'Opened Time'
      timepicker0.parentNode.parentNode.classList.remove('hidden')
      break
      // Last Modified | Date & Time Picker
    case 7:
      // Show the between constraint
      constraintBetweenOption.removeAttribute('disabled')
      // Show the needed fields
      datepicker0.parentNode.childNodes[4].textContent = 'Modified Date'
      datepicker0.parentNode.parentNode.classList.remove('hidden')
      timepicker0.parentNode.childNodes[4].textContent = 'Modified Time'
      timepicker0.parentNode.parentNode.classList.remove('hidden')
      break
  }
})

// Add a click listener to the sorting constraint dropdown
utils.click(sortingConstraintDropdown, element => {
  var sortingTypeDropdownValue = sortingTypeDropdown.value
  if (element.target.value === '5') {
    // Check if the sorting classifier needs two of each picker
    if (sortingTypeDropdownValue === '5' || sortingTypeDropdownValue === '6' || sortingTypeDropdownValue === '7') {
      datepicker0.parentNode.childNodes[4].textContent = 'First Date'
      timepicker0.parentNode.childNodes[4].textContent = 'First Time'
      datepicker1.parentNode.parentNode.classList.remove('hidden')
      if (sortingTypeDropdownValue === '5') {
        timepicker0.parentNode.className = 'input-field col s12 m5 l3'
        datepicker0.parentNode.className = 'input-field col s12 m5 l3'
      }
    }
  } else {
    if (sortingTypeDropdownValue === '5') {
      timepicker0.parentNode.className = 'input-field col s0 m0 l0 hidden'
      datepicker0.parentNode.className = 'input-field col s12 m 10 l6'
    }
    datepicker1.parentNode.parentNode.classList.add('hidden')
  }
})

// Add a click listener to the pick folder button
utils.click(folderPickerButton, () => {
  folderPicker.setVisible(true)
})

// Add event listener for when the document is loaded
document.addEventListener('DOMContentLoaded', function () {
  utils.lazyLoadCSS(removeLoader)
  var googleApiScript = document.createElement('script')
  googleApiScript.src = 'https://apis.google.com/js/api.js'
  googleApiScript.addEventListener('load', function () {
    Google = window.gapi
    Google.load('client:auth2', function () {
      Google.client.init({
        apiKey: apiKey,
        clientId: '362606538820-om1dhhvv5d9npas7jj02mbtvi5mjksmo.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        scope: 'https://www.googleapis.com/auth/drive'
      }).then(function () {
        Google.auth2.getAuthInstance().isSignedIn.listen(userAuthentication)
        userAuthentication(Google.auth2.getAuthInstance().isSignedIn.get())
        Google.load('picker', function () {
          google = window.google
          var view = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true)
          var picker = new google.picker.PickerBuilder()
            .disableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
            .setAppId(362606538820)
            .setOAuthToken(Google.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token)
            .setDeveloperKey('AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM')
            .setSelectableMimeTypes('application/vnd.google-apps.folder')
            .addView(view)
            .setCallback(folderPicked)
            .build()
          folderPicker = picker
        })
      }, function (err) {
        console.error(err)
      })
    })
  })
  document.getElementsByTagName('body')[0].appendChild(googleApiScript)
})
