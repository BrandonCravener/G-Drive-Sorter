(function(window, document) {
    // Put variables from window into variables for easy reference
    var Materialize = window.M,
        Firebase = window.firebase,
        Google;

    var sidenav = document.getElementById('slide-out'),
        sidenavInstance = Materialize.Sidenav.init(sidenav);

    var dropdown = document.querySelector('.dropdown-trigger'),
        dropdownInstance = Materialize.Dropdown.init(dropdown, {
            coverTrigger: false,
            alignment: 'right'
        });

    var parallax = document.querySelector('.parallax'),
        parallaxInstance = Materialize.Parallax.init(parallax, {});

    var tabs = document.querySelector('.tabs'),
        tabsInstance = Materialize.Tabs.init(tabs,{});

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
        deleteAccountButton = document.getElementById('button-delete-account');

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

    deleteAccountButton.addEventListener('click', function() {
        Firebase.auth().currentUser.delete().then(function() {
            Google.auth2.getAuthInstance().disconnect();
            Google.auth2.getAuthInstance().signOut();
        });
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
                    apiKey: 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
                    clientId: '362606538820-om1dhhvv5d9npas7jj02mbtvi5mjksmo.apps.googleusercontent.com',
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
                    scope: 'https://www.googleapis.com/auth/drive',
                }).then(function() {
                    Google.auth2.getAuthInstance().isSignedIn.listen(userAuthentication);
                    userAuthentication(Google.auth2.getAuthInstance().isSignedIn.get());
                }, function(err) {
                    console.log(err)
                });
            });
        });
        document.getElementsByTagName('body')[0].appendChild(googleApiScript);
    });
})(window, document);