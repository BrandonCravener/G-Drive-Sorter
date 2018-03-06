'use strict';
(function(window, document) {
    // Put variables from window into variables for easy reference
    var Materialize = window.M,
        Firebase = window.firebase,
        Google,
        google,
        apiKey = 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
        folderPicker;

    var sidenav = document.getElementById('slide-out'),
        sidenavInstance = Materialize.Sidenav.init(sidenav);

    var dropdown = document.querySelector('.dropdown-trigger'),
        dropdownInstance = Materialize.Dropdown.init(dropdown, {
            coverTrigger: false,
            alignment: 'right'
        });

    var datepicker0 = document.getElementById('sorting-datepicker-0'),
        datepickerInstance = Materialize.Datepicker.init(datepicker0);

    var timepicker0 = document.getElementById('sorting-timepicker-0'),
        timepickerInstance0 = Materialize.Timepicker.init(timepicker0);
    
    var datepicker1 = document.getElementById('sorting-datepicker-1'),
        datepickerInstance1 = Materialize.Datepicker.init(datepicker1);

    var timepicker1 = document.getElementById('sorting-timepicker-1'),
        timepickerInstance1 = Materialize.Timepicker.init(timepicker1);

    var parallax = document.querySelector('.parallax'),
        parallaxInstance = Materialize.Parallax.init(parallax);

    var tabs = document.querySelector('.tabs'),
        tabsInstance = Materialize.Tabs.init(tabs);


    // Firebase variables
    var firebaseConfig = {
            apiKey: 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
            authDomain: 'g-drive-sorter-2.firebaseapp.com',
            databaseURL: 'https://g-drive-sorter-2.firebaseio.com',
            projectId: 'g-drive-sorter-2',
            storageBucket: 'g-drive-sorter-2.appspot.com',
            messagingSenderId: '362606538820'
        };

    // Counting variables
    var lazyLoadElementsLoaded = 0,
        removeLoaderCallCount = 0;

    // Elements
    var logoutButton = document.getElementById('logout-button'),
        loadingOverlay = document.getElementById('loading-overlay'),
        loaderBackground = document.getElementById('loader-background'),
        deleteAccountButton = document.getElementById('button-delete-account'),
        folderPickerButton = document.getElementById('button-pick-drive-folder');

    var sortingTypeDropdown = document.getElementById('sorting-type-dropdown'),
        sortingTypeDropdownInstance = Materialize.FormSelect.init(sortingTypeDropdown, {
            classes: 'height-100'
        });
    
    var sortingConstraintDropdown = document.getElementById('sorting-constraint-dropdown'),
        sortingConstraintDropdownInstance = Materialize.FormSelect.init(sortingConstraintDropdown, {
            classes: 'height-100'
        });
    
    var sortingFileTypeDropdown = document.getElementById('sorting-file-type-dropdown'),
        sortingFileTypeDropdownInstance = Materialize.FormSelect.init(sortingFileTypeDropdown, {
            classes: 'height-100'
        });

    var googleUser;

    function applyToElements(selector, callingFunction) {
        var items = document.querySelectorAll(selector);
        for (var i = 0; i < items.length; i++) {
            callingFunction(items[i]);
        }
    }

    function hide(selector) {
        applyToElements(selector, function(element) {
            element.style.display = 'none';
        });
    }

    function show(selector) {
        applyToElements(selector, function(element) {
            element.style.display = 'block';
        });
    }
    
    function removeLoader() {
        removeLoaderCallCount += 1;
        if (removeLoaderCallCount == 2) {
            if (loadingOverlay) {
                loaderBackground.classList.add('shrink');
                loadingOverlay.classList.add('fade');
                setTimeout(function() {
                    loadingOverlay.parentNode.removeChild(loadingOverlay);
                }, 800);
            }
        }
    }

    function userAuthentication(authenticated) {
        if (authenticated) {
            googleUser = Google.auth2.getAuthInstance().currentUser.get();
            hide('.no-auth');
            show('.auth');
            if (googleUser) {
                window.user = googleUser;
                var idToken = googleUser.getAuthResponse().id_token,
                    credentials = Firebase.auth.GoogleAuthProvider.credential(idToken);
                Firebase.auth().signInWithCredential(credentials).then(function(user) {
                    if (user) {
                        document.getElementById("prof-img").setAttribute('src', user.photoURL);
                        document.getElementById("prof-name").textContent = user.displayName;
                        document.getElementById("prof-email").textContent = user.email;
                    }
                });
            }
        } else {
            hide('.auth');
            show('.no-auth');
        }
        removeLoader();
    }

    function folderPicked(data) {
    }

    var stepper = new Stepper(document.getElementById('config-stepper'), {
        linear: true
    });

    // Initlaize the Firebase app
    Firebase.initializeApp(firebaseConfig);
    
    var Database = Firebase.database();
    
    // Get all of the login buttons
    applyToElements('.login-button', function(element) {
        // Apply a click listener to the button
        element.addEventListener('click', function() {
            // Login to the app with Google
            Google.auth2.getAuthInstance().signIn();
        });
    });

    // Add event listener to logout button
    logoutButton.addEventListener('click', function() {
        // Log the user out
        Google.auth2.getAuthInstance().signOut();
    });

    // Get event listener to the delete account button
    deleteAccountButton.addEventListener('click', function() {
        // Delete the firebase user
        Firebase.auth().currentUser.delete().then(function() {
            // Disconnect the app form the users Google account
            Google.auth2.getAuthInstance().disconnect();
            // Sign the user out of their account
            Google.auth2.getAuthInstance().signOut();
        });
    });

    var sortingTextField = document.getElementById('sorting-text-field'),
        sortingEmailField = document.getElementById('sorting-email-field');

    sortingTypeDropdown.addEventListener('change', function(element) {
        var constraintBetweenOption = sortingConstraintDropdownInstance.dropdownOptions.lastChild;
        // Hide the between constraint
        constraintBetweenOption.style.display = 'none';
        // Show the constraint select
        sortingConstraintDropdown.parentNode.parentNode.parentNode.classList.remove('hidden');
        // Hide all the constraint fields
        sortingTextField.parentNode.parentNode.classList.add('hidden');
        sortingEmailField.parentNode.parentNode.classList.add('hidden');
        console.log(datepicker0.parentNode.parentNode)
        datepicker0.parentNode.parentNode.classList.add('hidden');
        timepicker0.parentNode.parentNode.classList.add('hidden');
        datepicker1.parentNode.parentNode.classList.add('hidden');
        timepicker1.parentNode.parentNode.classList.add('hidden');
        folderPickerButton.parentNode.classList.add('hidden');
        // Check if the between constraint selected
        if (element.target.value !== '5') {
            timepicker0.parentNode.className = 'input-field col s12 m5 l3';
            datepicker0.parentNode.className = 'input-field col s12 m5 l3';
        }
        // Switch between the possible sorting types
        switch (Number(element.target.value)) {
            // Title | Text
            case 1:
                // Show text field
                sortingTextField.parentNode.parentNode.classList.remove('hidden');
            break;
            // Type | Dropdown
            case 2:
                // Show the file type dropdown
                sortingFileTypeDropdown.parentNode.parentNode.parentNode.classList.remove('hidden');
            break;
            // Location | Folder Picker
            case 3:
                folderPickerButton.parentNode.classList.remove('hidden');
            break;
            // Owner | Name / Email
            case 4:
                // Show the needed fields
                sortingTextField.parentNode.parentNode.classList.remove('hidden');
                sortingEmailField.parentNode.parentNode.classList.remove('hidden');
            break;
            // Creation Date | Date Picker
            case 5:
                // Show the between constraint
                constraintBetweenOption.style.display = 'block';
                // Show the needed fields
                datepicker0.parentNode.childNodes[4].textContent = "Creation Date";
                datepicker0.parentNode.parentNode.classList.remove('hidden');
                timepicker0.parentNode.className = 'input-field col s0 m0 l0 hidden';
                datepicker0.parentNode.className = 'input-field col s12 m 10 l6';
            break;
            // Last Opened | Date & Time Picker
            case 6:
                // Show the between constraint
                constraintBetweenOption.style.display = 'block';
                // Show the needed fields
                datepicker0.parentNode.childNodes[4].textContent = "Opened Date";
                datepicker0.parentNode.parentNode.classList.remove('hidden');
                timepicker0.parentNode.childNodes[4].textContent = "Opened Time";
                timepicker0.parentNode.parentNode.classList.remove('hidden');
            break;
            // Last Modified | Date & Time Picker
            case 7:
                // Show the between constraint
                constraintBetweenOption.style.display = 'block';
                // Show the needed fields
                datepicker0.parentNode.childNodes[4].textContent = "Modified Date";
                datepicker0.parentNode.parentNode.classList.remove('hidden');
                timepicker0.parentNode.childNodes[4].textContent = "Modified Time";
                timepicker0.parentNode.parentNode.classList.remove('hidden');
            break;
        }
    });
    
    // Listen for sorting constraint change
    sortingConstraintDropdown.addEventListener('change', function(element) {
        var sortingTypeDropdownValue = sortingTypeDropdown.value;
        if (element.target.value == '5') {
            // Check if the sorting classifer needs two of each picker 
            if (sortingTypeDropdownValue == '5' || sortingTypeDropdownValue == '6' || sortingTypeDropdownValue == '7') {
                datepicker0.parentNode.childNodes[4].textContent = "First Date";
                timepicker0.parentNode.childNodes[4].textContent = "First Time";
                datepicker1.parentNode.parentNode.classList.remove('hidden');
                if (sortingTypeDropdownValue == '5') {
                    timepicker0.parentNode.className = 'input-field col s12 m5 l3';
                    datepicker0.parentNode.className = 'input-field col s12 m5 l3';
                }
            }
        } else {
            if (sortingTypeDropdownValue == '5') {
                timepicker0.parentNode.className = 'input-field col s0 m0 l0 hidden';
                datepicker0.parentNode.className = 'input-field col s12 m 10 l6';
            }
            datepicker1.parentNode.parentNode.classList.add('hidden');
        }
    });

    folderPickerButton.addEventListener('click', function() {
        folderPicker.setVisible(true);
    });

    // Add event listener for when the document is loaded
    document.addEventListener('DOMContentLoaded', function() {
        var lazyLoadElements = document.getElementsByClassName('lazyLoad');
        // Itterate through the preload stylesheets and start to load them
        for (var i = 0; i < lazyLoadElements.length; i++) {
            var elem = lazyLoadElements[i];
            if (elem.getAttribute('rel') == 'preload') {
                elem.setAttribute('rel', 'stylesheet');
                elem.addEventListener('load', function() {
                    lazyLoadElementsLoaded += 1;
                    // Check if all of the stylesheets are loaded
                    if (lazyLoadElementsLoaded == lazyLoadElements.length) {
                        // Remove loader overlay
                        removeLoader();
                    }
                });
            }
        }

        var googleApiScript = document.createElement('script');
        googleApiScript.src = 'https://apis.google.com/js/api.js';
        googleApiScript.addEventListener('load', function() {
            Google = window.gapi;
            Google.load('client:auth2', function() {
                Google.client.init({
                    apiKey: apiKey,
                    clientId: '362606538820-om1dhhvv5d9npas7jj02mbtvi5mjksmo.apps.googleusercontent.com',
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
                    scope: 'https://www.googleapis.com/auth/drive',
                }).then(function() {
                    Google.auth2.getAuthInstance().isSignedIn.listen(userAuthentication);
                    userAuthentication(Google.auth2.getAuthInstance().isSignedIn.get());
                    Google.load('picker', function() {
                        google = window.google;
                        var view = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
                            .setIncludeFolders(true)
                            .setSelectFolderEnabled(true),
                            picker = new google.picker.PickerBuilder()
                            .disableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
                            .setAppId(362606538820)
                            .setOAuthToken(Google.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token)
                            .setDeveloperKey('AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM')
                            .setSelectableMimeTypes('application/vnd.google-apps.folder')
                            .addView(view)
                            .setCallback(folderPicked)
                            .build();
                        folderPicker = picker;
                    });
                }, function(err) {
                    console.log(err)
                });
            });
        });
        document.getElementsByTagName('body')[0].appendChild(googleApiScript);
    });
})(window, document);