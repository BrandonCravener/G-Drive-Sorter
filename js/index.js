(function(window, document) {
    var Materialize = window.M,
        Firebase = window.firebase,
        sidenav = document.getElementById('slide-out'),
        sidenavInstance = Materialize.Sidenav.init(sidenav),
        googleProvider = new Firebase.auth.GoogleAuthProvider();
        firebaseConfig = {
            apiKey: 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
            authDomain: 'g-drive-sorter-2.firebaseapp.com',
            databaseURL: 'https://g-drive-sorter-2.firebaseio.com',
            projectId: 'g-drive-sorter-2',
            storageBucket: 'g-drive-sorter-2.appspot.com',
            messagingSenderId: '362606538820'
        };

        function userAuthenticated(user) {
            $('.auth').show();
            $('.no-auth').hide();
            if (user) {
                $('#prof-img').attr('src', user.photoURL);
                $('#prof-name').text(user.displayName);
                $('#prof-email').text(user.email);
            }
        }

        function userNotAuthenticated(user) {
            $('.auth').hide();
            $('.no-auth').show();
        }
        
        Firebase.initializeApp(firebaseConfig);
        
        $("#login-button").click(function() {
            Firebase.auth().signInWithPopup(googleProvider).then(function(result) {
                var token = result.credential.accessToken;
            }).catch(function(error) {});
        });

        Firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                userAuthenticated(user);
            } else {
                userNotAuthenticated(user);
            }
        });
})(window, document);