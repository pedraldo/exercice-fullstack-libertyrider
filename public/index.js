// Initialize Firebase
const config = {
    apiKey: "AIzaSyCh-YZVdlpTpe-wkuNN9r1CBY0UgoP9WUo",
    authDomain: "libertyridertest.firebaseapp.com",
    databaseURL: "https://libertyridertest.firebaseio.com",
    projectId: "libertyridertest",
    storageBucket: "libertyridertest.appspot.com",
    messagingSenderId: "1091199565732"
};
firebase.initializeApp(config);

const state = 0;
const loginDivId = "#login";
const contentDivId = "#content";

// Submit login form handler
$('#btn-login').click((event) => {
    event.stopPropagation();
    const email = $('#email').val();
    const password = $('#password').val();
    login(email, password);
});

// Trigger click on submit button
$('input').keypress((event) => {
    const code = event.keyCode || event.which;
    
    if (code === 13) { // key code for Enter
        $('#btn-login').click();
    }
});

// Submit logout form handler
$('#btn-logout').click((event) => {
    event.stopPropagation();
    logout();
});

function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((firebaseData) => {
        debugger;
        switchState(loginDivId, contentDivId);
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode + ' : ' + errorMessage);
        // ...
    });
}

function logout() {
    firebase.auth().signOut().then(() => {
        switchState(contentDivId, loginDivId);
    }).catch((error) => {
        console.error('Firebase signOut error : ', error.message);
    });
}

function switchState(divToHide, divToShow) {
  $(divToHide).css('display', 'none');
  $(divToShow).css('display', 'block');
}