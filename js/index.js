(function(window, document) {
    // Put variables from window into variables for easy reference
    var Materialize = window.M,
        Firebase = window.firebase;

    var sidenav = document.getElementById('slide-out'),
        sidenavInstance = Materialize.Sidenav.init(sidenav);

    var dropdown = document.querySelector('.dropdown-trigger'),
        dropdownInstance = Materialize.Dropdown.init(dropdown, {
            coverTrigger: false
        });

    var parallax = document.querySelector('.parallax'),
        parallaxInstance = Materialize.Parallax.init(parallax, {});

    // Firebase variables
    var googleProvider = new Firebase.auth.GoogleAuthProvider(),
        firebaseConfig = {
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
        loaderBackground = document.getElementById('loader-background');

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

    function userAuthenticated(user) {
        show('.auth');
        hide('.no-auth');
        if (user) {
            document.getElementById("prof-img").setAttribute('src', user.photoURL);
            document.getElementById("prof-name").textContent = user.displayName;
            document.getElementById("prof-email").textContent = user.email;
            Database.ref('users/' + user.uid).once('value').then(function(snapshot){
                var data = snapshot.val(),
                    token = data.access_token;
                if (token) {
                }
            });
        }
    }
    
    function userNotAuthenticated(user) {
        hide('.auth');
        show('.no-auth');
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
    
    Firebase.initializeApp(firebaseConfig);
    
    var Database = Firebase.database();

    googleProvider.addScope('https://www.googleapis.com/auth/drive.metadata.readonly');
    
    // Get all of the login buttons
    applyToElements('.login-button', function(element) {
        // Apply a click listener to the button
        element.addEventListener('click', function() {
            // Login to the app with Google
            Firebase.auth().signInWithPopup(googleProvider).then(function(result) {
                var token = result.credential.accessToken,
                    userID = result.user.uid
                Database.ref('users/' + userID).set({
                    access_token: token
                });
            });
        });
    });

    // Add event listener to logout button
    logoutButton.addEventListener('click', function() {
        // Log the user out
        Firebase.auth().signOut();
    });
    
    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            userAuthenticated(user);
        } else {
            userNotAuthenticated(user);
        }
        removeLoader();
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
    });
})(window, document);