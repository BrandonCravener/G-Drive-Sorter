// Browserify / Typescript imports
const utils = require('./utils.ts')
const config = require('./config.ts')

// Variables
let Google
let google
let googleUser
let folderPicker
let Materialize = window.M
let Stepper = window.Stepper
let Firebase = window.firebase
let apiKey = 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM'
let firebaseConfig = {
  apiKey: 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
  authDomain: 'g-drive-sorter-2.firebaseapp.com',
  databaseURL: 'https://g-drive-sorter-2.firebaseio.com',
  projectId: 'g-drive-sorter-2',
  storageBucket: 'g-drive-sorter-2.appspot.com',
  messagingSenderId: '362606538820'
}
let selectedFolder

// Counting variables
let removeLoaderCallCount = 0

// Elements
let tabs = document.querySelector('.tabs')
let sidenav = document.getElementById('slide-out')
let parallax = document.querySelector('.parallax')
let collapsible = document.querySelector('.collapsible')
let dropdown = document.querySelector('.dropdown-trigger')
let logoutButton = document.getElementById('logout-button')
let configStepper = document.getElementById('config-stepper')
let loadingOverlay = document.getElementById('loading-overlay')
let newConfigModal = document.getElementById('new-config-modal')
let datepicker0 = document.getElementById('sorting-datepicker-0')
let timepicker0 = document.getElementById('sorting-timepicker-0')
let datepicker1 = document.getElementById('sorting-datepicker-1')
let timepicker1 = document.getElementById('sorting-timepicker-1')
let configsContainer = document.getElementById('configs-container')
let loaderBackground = document.getElementById('loader-background')
let sideNewConfigButton = document.getElementById('side-new-config')
let sortingTextField = document.getElementById('sorting-text-field')
let sortingEmailField = document.getElementById('sorting-email-field')
let settingsLinkButton = document.getElementById('settings-link-button')
let deleteAccountButton = document.getElementById('button-delete-account')
let dashboardLinkButton = document.getElementById('dashboard-link-button')
let sortingTypeDropdown = document.getElementById('sorting-type-dropdown')
let newConfigButton = document.getElementById('button-create-configuration')
let folderPickerButton = document.getElementById('button-pick-drive-folder')
let configurationLinkButton = document.getElementById('configuration-link-button')
let sortingFileTypeDropdown = document.getElementById('sorting-file-type-dropdown')
let sortingConstraintDropdown = document.getElementById('sorting-constraint-dropdown')

// Declare variable for easy reference to thew new config button class list
let configButtonClasses = newConfigButton.classList

// Define stepper with config
let stepper = new Stepper(configStepper, {
  linear: true,
  invalidClass: 'invalid',
  completionCallback: () => {
    let newConfig = {groups: {}}
    let configurationName = document.getElementById('new-config-name').value
    let groupName = document.getElementById('new-group-name').value
    let sortingClassifier = sortingTypeDropdown.value
    let sortingConstraint = sortingConstraintDropdown.value
    let data = {}
    // Set the name of the new configuration
    newConfig['name'] = configurationName
    // Set the constraint and classifier type of the configuration as well as the data
    newConfig['groups'][groupName] = {
      classifier: sortingClassifier,
      constraint: sortingConstraint
    }
    switch (Number(sortingClassifier)) {
      case 1:
        data['title'] = sortingTextField.value
        break
      case 2:
        data['type'] = sortingFileTypeDropdown.value
        break
      case 3:
        data['location'] = selectedFolder
        break
      case 4:
        data = {
          name: sortingTextField.value,
          email: sortingEmailField.value
        }
        break
      case 5:
        data = {
          date0: Materialize.Datepicker.getInstance(datepicker0).date,
          date1: Materialize.Datepicker.getInstance(datepicker1).date
        }
        break
      default:
        data = {
          dateTime0: {
            date: Materialize.Datepicker.getInstance(datepicker0).date,
            time: Materialize.Timepicker.getInstance(timepicker0).time
          }
        }
        if (sortingConstraint === '5') {
          data['dateTime1'] = {
            date: Materialize.Datepicker.getInstance(datepicker1).date,
            time: Materialize.Timepicker.getInstance(timepicker1).time
          }
        }
        break
    }
    newConfig['groups'][groupName]['data'] = data
    // Add the new config to the database
    Firebase.database().ref('/users/' + Firebase.auth().currentUser.uid + '/config/').push(newConfig)
  }
})

function removeLoader () {
  removeLoaderCallCount += 1
  if (removeLoaderCallCount === 2) {
    if (loadingOverlay) {
      loaderBackground.classList.add('shrink')
      loadingOverlay.classList.add('fade')
      // Fix the tab indicator
      tabsInstance.updateTabIndicator()
      setTimeout(() => {
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
      let idToken = googleUser.getAuthResponse().id_token
      let credentials = Firebase.auth.GoogleAuthProvider.credential(idToken)
      Firebase.auth().signInWithCredential(credentials).then(user => {
        if (user) {
          document.getElementById('prof-img').setAttribute('src', user.photoURL)
          document.getElementById('prof-name').textContent = user.displayName
          document.getElementById('prof-email').textContent = user.email
        }
      })
    }
  } else {
    utils.hide('#no-configs-message')
    utils.hide('#class-list-container')
    // Clear configurations
    configsContainer.innerHTML = ''
    // Hide all elements shown with authentication
    utils.hide('.auth')
    // Show all elements shown without authentication
    utils.show('.no-auth')
  }
  // Wait 100 milliseconds
  setTimeout(() => {
    // Fix the tab indicator
    tabsInstance.updateTabIndicator()
  }, 100)
  // Remove the loader from the screen
  removeLoader()
}

// Function to handel the google drive file picker picking a folder
function folderPicked (data) {
  // Check if the user picked a folder
  if (data.action === 'picked') {
    // Set the global variable to the selected folders id
    selectedFolder = data.docs[0].id
  }
}

function handelNewConfigSelect () {
  let sortingTypeDropdownValue = sortingTypeDropdown.value
  let sortingConstraintDropdownValue = sortingConstraintDropdown.value
  let constraintBetweenOption = sortingConstraintDropdown.lastElementChild
  // Disable the between option by default
  constraintBetweenOption.setAttribute('disabled', true)
  // Show the constraint select
  sortingConstraintDropdown.parentNode.classList.remove('hidden')
  // Hide all the constraint fields
  folderPickerButton.parentNode.classList.add('hidden')
  datepicker0.parentNode.parentNode.classList.add('hidden')
  datepicker0.removeAttribute('required')
  timepicker0.parentNode.parentNode.classList.add('hidden')
  timepicker0.removeAttribute('required')
  datepicker1.parentNode.parentNode.classList.add('hidden')
  datepicker1.removeAttribute('required')
  timepicker1.parentNode.parentNode.classList.add('hidden')
  timepicker1.removeAttribute('required')
  sortingFileTypeDropdown.parentNode.classList.add('hidden')
  sortingFileTypeDropdown.removeAttribute('required')
  sortingTextField.parentNode.parentNode.classList.add('hidden')
  sortingTextField.removeAttribute('required')
  sortingEmailField.parentNode.parentNode.classList.add('hidden')
  sortingEmailField.removeAttribute('required')
  // Check if the between constraint selected
  if (sortingTypeDropdownValue !== '5') {
    timepicker0.parentNode.className = 'input-field col s12 m5 l3'
    datepicker0.parentNode.className = 'input-field col s12 m5 l3'
  }
  // Switch between the possible sorting types
  switch (Number(sortingTypeDropdownValue)) {
    // Title | Text
    case 1:
      // Show text field
      sortingTextField.parentNode.parentNode.classList.remove('hidden')
      // Make the text field required
      sortingTextField.setAttribute('required', '')
      break
      // Type | Dropdown
    case 2:
      // Show the file type dropdown
      sortingFileTypeDropdown.parentNode.classList.remove('hidden')
      sortingFileTypeDropdown.setAttribute('required', '')
      break
      // Location | Folder Picker
    case 3:
      folderPickerButton.parentNode.classList.remove('hidden')
      break
      // Owner | Name / Email
    case 4:
      // Show the needed fields
      sortingTextField.parentNode.parentNode.classList.remove('hidden')
      sortingTextField.setAttribute('required', '')
      sortingEmailField.parentNode.parentNode.classList.remove('hidden')
      sortingFileTypeDropdown.setAttribute('required', '')
      break
      // Creation Date | Date Picker
    case 5:
      // Show the between constraint
      constraintBetweenOption.removeAttribute('disabled')
      // Show the needed fields
      datepicker0.parentNode.children[1].textContent = 'Creation Date'
      datepicker0.parentNode.parentNode.classList.remove('hidden')
      datepicker0.setAttribute('required', '')
      datepicker0.parentNode.className = 'input-field col s12 m 10 l6'
      timepicker0.parentNode.className = 'input-field col s0 m0 l0 hidden'
      break
      // Last Opened | Date & Time Picker
    case 6:
      // Show the between constraint
      constraintBetweenOption.removeAttribute('disabled')
      // Show the needed fields
      datepicker0.parentNode.children[1].textContent = 'Opened Date'
      datepicker0.parentNode.parentNode.classList.remove('hidden')
      datepicker0.setAttribute('required', '')
      timepicker0.parentNode.children[1].textContent = 'Opened Time'
      timepicker0.parentNode.parentNode.classList.remove('hidden')
      timepicker0.setAttribute('required', '')
      break
      // Last Modified | Date & Time Picker
    case 7:
      // Show the between constraint
      constraintBetweenOption.removeAttribute('disabled')
      // Show the needed fields
      datepicker0.parentNode.children[1].textContent = 'Modified Date'
      datepicker0.parentNode.parentNode.classList.remove('hidden')
      datepicker0.setAttribute('required', '')
      timepicker0.parentNode.children[1].textContent = 'Modified Time'
      timepicker0.parentNode.parentNode.classList.remove('hidden')
      timepicker0.setAttribute('required', '')
      break
  }
  // Check if the user selected the between option
  if (sortingConstraintDropdownValue === '5') {
    // Check if the sorting classifier needs two of each picker
    if (sortingTypeDropdownValue === '5' || sortingTypeDropdownValue === '6' || sortingTypeDropdownValue === '7') {
      // Check if the user selected the creation date option
      if (sortingTypeDropdownValue === '5') {
        datepicker0.parentNode.className = 'input-field col s12 m10 l6'
        datepicker1.parentNode.className = 'input-field col s12 m10 l6'
        timepicker0.parentNode.className = 'input-field col s0 m0 l0 hidden'
        timepicker1.parentNode.className = 'input-field col s0 m0 l0 hidden'
        datepicker0.parentNode.children[1].textContent = 'From'
        datepicker1.parentNode.children[1].textContent = 'To'
        datepicker1.parentNode.parentNode.classList.remove('hidden')
      } else {
        datepicker0.parentNode.children[1].textContent = 'First Date'
        timepicker0.parentNode.children[1].textContent = 'First Time'
        datepicker1.parentNode.children[1].textContent = 'Second Date'
        datepicker1.parentNode.parentNode.classList.remove('hidden')
        datepicker1.parentNode.className = 'input-field col s12 m5 l3'
        timepicker1.parentNode.className = 'input-field col s12 m5 l3'
      }
    }
  } else {
    // Check if the user selected the creation date option
    if (sortingTypeDropdownValue === '5') {
      timepicker0.parentNode.className = 'input-field col s0 m0 l0 hidden'
      datepicker0.parentNode.className = 'input-field col s12 m 10 l6'
    }
    datepicker1.parentNode.parentNode.classList.add('hidden')
  }
}

// Initialize the Firebase app
Firebase.initializeApp(firebaseConfig)

// MaterializeCSS initialization
Materialize.Sidenav.init(sidenav)
Materialize.Dropdown.init(dropdown, {
  coverTrigger: false,
  alignment: 'right'
})
Materialize.Datepicker.init(datepicker0, {
  container: 'body'
})
Materialize.Timepicker.init(timepicker0, {
  container: 'body'
})
Materialize.Datepicker.init(datepicker1, {
  container: 'body'
})
Materialize.Timepicker.init(timepicker1, {
  container: 'body'
})
Materialize.Parallax.init(parallax)
Materialize.Tabs.init(tabs, {
  onShow: () => {
    let currentTab = tabsInstance.index
    if (currentTab === 1) {
      configButtonClasses.add('scale-in')
      Firebase
        .database()
        .ref(`/users/${Firebase.auth().currentUser.uid}`)
        .child('config')
        .limitToFirst(10)
        .once('value')
        .then(snapshot => {
          let data = snapshot.val()
          /**
           * TODO:
           *  Add fade out function
           *  Add fade in function
           */
          utils.hide('#config-loader')
          if (data === null) {
            utils.show('#no-configs-message')
          } else {
            configsContainer.innerHTML += config.ConfigHandler.generateListItems(data)
            utils.show('#class-list-container')
          }
        })
    } else {
      configButtonClasses.remove('scale-out')
      configButtonClasses.remove('scale-in')
      configButtonClasses.add('scale-out')
    }
  }
})
Materialize.Modal.init(newConfigModal, {
  onOpenStart: () => {
    configStepper.reset()
  }
})
Materialize.Collapsible.init(collapsible)

// Materialize Instances
let tabsInstance = Materialize.Tabs.getInstance(tabs)

// Initialize stepper
stepper.initialize()

// Get all of the login buttons
utils.applyToElements('.login-button', element => {
  // Apply a click listener to the button
  element.addEventListener('click', () => {
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
  Firebase.auth().currentUser.delete().then(() => {
    // Disconnect the app form the users Google account
    Google.auth2.getAuthInstance().disconnect()
    // Sign the user out of their account
    Google.auth2.getAuthInstance().signOut()
  })
})

// Add a click listener to the pick folder button
utils.click(folderPickerButton, () => {
  folderPicker.setVisible(true)
})

utils.click(dashboardLinkButton, () => {
  tabsInstance.select('overview')
})

utils.click(configurationLinkButton, () => {
  tabsInstance.select('config')
})

utils.click(settingsLinkButton, () => {
  tabsInstance.select('settings')
})

utils.click(sideNewConfigButton, () => {
  tabsInstance.select('config')
  Materialize.Modal.getInstance(newConfigModal).open()
})

// Add change listener to sorting dropdown
utils.change(sortingTypeDropdown, handelNewConfigSelect)

// Add a click listener to the sorting constraint dropdown
utils.change(sortingConstraintDropdown, handelNewConfigSelect)

// Add event listener for when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check if the page is starting on the config tab
  if (window.location.hash === '#config') {
    // Show the new class button
    configButtonClasses.add('scale-in')
  }
  // Call a utility method to load all css and pass a callback
  utils.lazyLoadCSS(removeLoader)
  // Declare a variable to hold the new script element
  let googleApiScript = document.createElement('script')
  googleApiScript.src = 'https://apis.google.com/js/api.js'
  googleApiScript.addEventListener('load', () => {
    Google = window.gapi
    Google.load('client:auth2', () => {
      Google.client.init({
        apiKey: apiKey,
        clientId: '362606538820-om1dhhvv5d9npas7jj02mbtvi5mjksmo.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        scope: 'https://www.googleapis.com/auth/drive'
      }).then(() => {
        Google.auth2.getAuthInstance().isSignedIn.listen(userAuthentication)
        userAuthentication(Google.auth2.getAuthInstance().isSignedIn.get())
        Google.load('picker', () => {
          google = window.google
          let view = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true)
          let picker = new google.picker.PickerBuilder()
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
      }, err => {
        console.error(err)
      })
    })
  })
  document.getElementsByTagName('body')[0].appendChild(googleApiScript)
})
