// Browserify / Typescript imports
const utils = require('./utils.ts')
const firebase = require('./firebase.ts')
const config = require('./config.ts')
const { elements } = require('./variables.ts')
const materialize = require('./materialize.ts')
const Materialize = require('materialize-css')

// Variables
let Google
let google
let googleUser
let folderPicker
let selectedFolder
let Stepper = window.Stepper
let apiKey = 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM'

// Counting variables
let removeLoaderCallCount = 0

// Declare variable for easy reference to thew new config button class list
let configButtonClasses = elements.newConfigButton.classList

// Define stepper with config
let stepper = new Stepper(elements.configStepper, {
  linear: true,
  invalidClass: 'invalid',
  completionCallback: () => {
    let newConfig = {groups: {}}
    let configurationName = document.getElementById('new-config-name').value
    let groupName = document.getElementById('new-group-name').value
    let sortingClassifier = elements.sortingTypeDropdown.value
    let sortingConstraint = elements.sortingConstraintDropdown.value
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
        data['title'] = elements.sortingTextField.value
        break
      case 2:
        data['type'] = elements.sortingFileTypeDropdown.value
        break
      case 3:
        data['location'] = selectedFolder
        break
      case 4:
        data = {
          name: elements.sortingTextField.value,
          email: elements.sortingEmailField.value
        }
        break
      case 5:
        data = {
          date0: datepicker0.date,
          date1: datepicker1.date
        }
        break
      default:
        data = {
          dateTime0: {
            date: datepicker0.date,
            time: timepicker0.time
          }
        }
        if (sortingConstraint === '5') {
          data['dateTime1'] = {
            date: datepicker1.date,
            time: timepicker1.time
          }
        }
        break
    }
    newConfig['groups'][groupName]['data'] = data
    // Add the new config to the database
    firebase.createConfig(newConfig)
    // Close the modal
    newConfigModal.close()
  }
})

function configTabHandler () {
  let currentTab = tabsInstance.index
  // Declare variable for easy reference to thew new config button class list
  let configButtonClasses = elements.newConfigButton.classList
  let nextConfigPageButtonParent = elements.nextConfigPageButton.parentNode
  if (currentTab === 1) {
    configButtonClasses.add('scale-in')
    firebase
      .getClasses()
      .then(snapshot => {
        let data = snapshot.val()
        let numConfigs = snapshot.numChildren()
        let numPages = Math.ceil(numConfigs / 10)
        if (numPages === 1) {
          nextConfigPageButtonParent.classList.add('disabled')
          nextConfigPageButtonParent.classList.remove('waves-effect')
        } else {
          nextConfigPageButtonParent.classList.remove('disabled')
          nextConfigPageButtonParent.classList.add('waves-effect')
        }
        elements.configPageWrapper.innerHTML = ''
        elements.configPageWrapper.innerHTML = config.ConfigHandler.generatePageNumbers(numPages)
        /**
         * TODO:
         *  Add fade out function
         *  Add fade in function
         */
        utils.hide('#config-loader')
        if (data === null) {
          utils.show('#no-configs-message')
        } else {
          elements.configsContainer.innerHTML += config.ConfigHandler.generateListItems(data)
          utils.show('#class-list-container')
        }
      })
  } else {
    configButtonClasses.remove('scale-out')
    configButtonClasses.remove('scale-in')
    configButtonClasses.add('scale-out')
  }
}

function removeLoader () {
  removeLoaderCallCount += 1
  if (removeLoaderCallCount === 2) {
    if (elements.loadingOverlay) {
      elements.loaderBackground.classList.add('shrink')
      elements.loadingOverlay.classList.add('fade')
      // Fix the tab indicator
      tabsInstance.updateTabIndicator()
      setTimeout(() => {
        elements.loadingOverlay.parentNode.removeChild(elements.loadingOverlay)
      }, 800)
    }
  }
}

function userAuthentication (authenticated) {
  // Check if the page is starting on the config tab
  if (window.location.hash === '#config') {
    // Show the new class button
    configButtonClasses.add('scale-in')
    if (authenticated) {
      // Handel the tab loading
      configTabHandler()
    }
  }
  if (authenticated) {
    googleUser = Google.auth2.getAuthInstance().currentUser.get()
    utils.hide('.no-auth')
    utils.show('.auth')
    if (googleUser) {
      window.user = googleUser
      let idToken = googleUser.getAuthResponse().id_token
      firebase.signinWithCredential(idToken).then(user => {
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
    elements.configsContainer.innerHTML = ''
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
  let sortingTypeDropdownValue = elements.sortingTypeDropdown.value
  let sortingConstraintDropdownValue = elements.sortingConstraintDropdown.value
  let constraintBetweenOption = elements.sortingConstraintDropdown.lastElementChild
  // Disable the between option by default
  constraintBetweenOption.setAttribute('disabled', true)
  // Show the constraint select
  elements.sortingConstraintDropdown.parentNode.classList.remove('hidden')
  // Hide all the constraint fields
  elements.folderPickerButton.parentNode.classList.add('hidden')
  elements.datepicker0.parentNode.parentNode.classList.add('hidden')
  elements.datepicker0.removeAttribute('required')
  elements.timepicker0.parentNode.parentNode.classList.add('hidden')
  elements.timepicker0.removeAttribute('required')
  elements.datepicker1.parentNode.parentNode.classList.add('hidden')
  elements.datepicker1.removeAttribute('required')
  elements.timepicker1.parentNode.parentNode.classList.add('hidden')
  elements.timepicker1.removeAttribute('required')
  elements.sortingFileTypeDropdown.parentNode.classList.add('hidden')
  elements.sortingFileTypeDropdown.removeAttribute('required')
  elements.sortingTextField.parentNode.parentNode.classList.add('hidden')
  elements.sortingTextField.removeAttribute('required')
  elements.sortingEmailField.parentNode.parentNode.classList.add('hidden')
  elements.sortingEmailField.removeAttribute('required')
  // Check if the between constraint selected
  if (sortingTypeDropdownValue !== '5') {
    elements.timepicker0.parentNode.className = 'input-field col s12 m5 l3'
    elements.datepicker0.parentNode.className = 'input-field col s12 m5 l3'
  }
  // Switch between the possible sorting types
  switch (Number(sortingTypeDropdownValue)) {
    // Title | Text
    case 1:
      // Show text field
      elements.sortingTextField.parentNode.parentNode.classList.remove('hidden')
      // Make the text field required
      elements.sortingTextField.setAttribute('required', '')
      break
      // Type | Dropdown
    case 2:
      // Show the file type dropdown
      elements.sortingFileTypeDropdown.parentNode.classList.remove('hidden')
      elements.sortingFileTypeDropdown.setAttribute('required', '')
      break
      // Location | Folder Picker
    case 3:
      elements.folderPickerButton.parentNode.classList.remove('hidden')
      break
      // Owner | Name / Email
    case 4:
      // Show the needed fields
      elements.sortingTextField.parentNode.parentNode.classList.remove('hidden')
      elements.sortingTextField.setAttribute('required', '')
      elements.sortingEmailField.parentNode.parentNode.classList.remove('hidden')
      elements.sortingFileTypeDropdown.setAttribute('required', '')
      break
      // Creation Date | Date Picker
    case 5:
      // Show the between constraint
      constraintBetweenOption.removeAttribute('disabled')
      // Show the needed fields
      elements.datepicker0.parentNode.children[1].textContent = 'Creation Date'
      elements.datepicker0.parentNode.parentNode.classList.remove('hidden')
      elements.datepicker0.setAttribute('required', '')
      elements.datepicker0.parentNode.className = 'input-field col s12 m 10 l6'
      elements.timepicker0.parentNode.className = 'input-field col s0 m0 l0 hidden'
      break
      // Last Opened | Date & Time Picker
    case 6:
      // Show the between constraint
      constraintBetweenOption.removeAttribute('disabled')
      // Show the needed fields
      elements.datepicker0.parentNode.children[1].textContent = 'Opened Date'
      elements.datepicker0.parentNode.parentNode.classList.remove('hidden')
      elements.datepicker0.setAttribute('required', '')
      elements.timepicker0.parentNode.children[1].textContent = 'Opened Time'
      elements.timepicker0.parentNode.parentNode.classList.remove('hidden')
      elements.timepicker0.setAttribute('required', '')
      break
      // Last Modified | Date & Time Picker
    case 7:
      // Show the between constraint
      constraintBetweenOption.removeAttribute('disabled')
      // Show the needed fields
      elements.datepicker0.parentNode.children[1].textContent = 'Modified Date'
      elements.datepicker0.parentNode.parentNode.classList.remove('hidden')
      elements.datepicker0.setAttribute('required', '')
      elements.timepicker0.parentNode.children[1].textContent = 'Modified Time'
      elements.timepicker0.parentNode.parentNode.classList.remove('hidden')
      elements.timepicker0.setAttribute('required', '')
      break
  }
  // Check if the user selected the between option
  if (sortingConstraintDropdownValue === '5') {
    // Check if the sorting classifier needs two of each picker
    if (sortingTypeDropdownValue === '5' || sortingTypeDropdownValue === '6' || sortingTypeDropdownValue === '7') {
      // Check if the user selected the creation date option
      if (sortingTypeDropdownValue === '5') {
        elements.datepicker0.parentNode.className = 'input-field col s12 m10 l6'
        elements.datepicker1.parentNode.className = 'input-field col s12 m10 l6'
        elements.timepicker0.parentNode.className = 'input-field col s0 m0 l0 hidden'
        elements.timepicker1.parentNode.className = 'input-field col s0 m0 l0 hidden'
        elements.datepicker0.parentNode.children[1].textContent = 'From'
        elements.datepicker1.parentNode.children[1].textContent = 'To'
        elements.datepicker1.parentNode.parentNode.classList.remove('hidden')
      } else {
        elements.datepicker0.parentNode.children[1].textContent = 'First Date'
        elements.timepicker0.parentNode.children[1].textContent = 'First Time'
        elements.datepicker1.parentNode.children[1].textContent = 'Second Date'
        elements.datepicker1.parentNode.parentNode.classList.remove('hidden')
        elements.datepicker1.parentNode.className = 'input-field col s12 m5 l3'
        elements.timepicker1.parentNode.className = 'input-field col s12 m5 l3'
      }
    }
  } else {
    // Check if the user selected the creation date option
    if (sortingTypeDropdownValue === '5') {
      elements.timepicker0.parentNode.className = 'input-field col s0 m0 l0 hidden'
      elements.datepicker0.parentNode.className = 'input-field col s12 m 10 l6'
    }
    elements.datepicker1.parentNode.parentNode.classList.add('hidden')
  }
}

// Initialize the Firebase app
firebase.init()

// MaterializeCSS initialization
materialize.init(configTabHandler)

// Materialize instances
let datepicker0 = Materialize.Datepicker.getInstance(elements.datepicker0)
let datepicker1 = Materialize.Datepicker.getInstance(elements.datepicker1)
let timepicker0 = Materialize.Timepicker.getInstance(elements.timepicker0)
let timepicker1 = Materialize.Timepicker.getInstance(elements.timepicker1)
let newConfigModal = Materialize.Modal.getInstance(elements.newConfigModal)
let tabsInstance = Materialize.Tabs.getInstance(document.getElementById('tabs'))

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
utils.click(elements.logoutButton, () => {
  // Log the user out
  Google.auth2.getAuthInstance().signOut()
})

// Add click listener to the delete account button
utils.click(elements.deleteAccountButton, () => {
  // Delete the firebase user
  firebase.deleteUser().then(() => {
    // Disconnect the app form the users Google account
    Google.auth2.getAuthInstance().disconnect()
    // Sign the user out of their account
    Google.auth2.getAuthInstance().signOut()
  })
})

// Add a click listener to the pick folder button
utils.click(elements.folderPickerButton, () => {
  folderPicker.setVisible(true)
})

utils.click(elements.dashboardLinkButton, () => {
  tabsInstance.select('overview')
})

utils.click(elements.configurationLinkButton, () => {
  tabsInstance.select('config')
})

utils.click(elements.settingsLinkButton, () => {
  tabsInstance.select('settings')
})

utils.click(elements.sideNewConfigButton, () => {
  tabsInstance.select('config')
  newConfigModal.open()
})

// Add change listener to sorting dropdown
utils.change(elements.sortingTypeDropdown, handelNewConfigSelect)

// Add a click listener to the sorting constraint dropdown
utils.change(elements.sortingConstraintDropdown, handelNewConfigSelect)

// Add event listener for when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
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

          folderPicker = new google.picker.PickerBuilder()
            .disableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
            .setAppId(362606538820)
            .setOAuthToken(Google.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token)
            .setDeveloperKey('AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM')
            .setSelectableMimeTypes('application/vnd.google-apps.folder')
            .addView(view)
            .setCallback(folderPicked)
            .build()
        })
      }, err => {
        console.error(err)
      })
    })
  })
  document.getElementsByTagName('body')[0].appendChild(googleApiScript)
})
