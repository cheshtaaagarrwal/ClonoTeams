var firebaseConfig = {
    apiKey: "AIzaSyC4XLLpAxBVzwterOX_H6B-acQouHjQjKg",
    authDomain: "ms-teams-clone-993dc.firebaseapp.com",
    databaseURL: "https://ms-teams-clone-993dc-default-rtdb.firebaseio.com",
    projectId: "ms-teams-clone-993dc",
    storageBucket: "ms-teams-clone-993dc.appspot.com",
    messagingSenderId: "948402121143",
    appId: "1:948402121143:web:cd130a6f1b7c6b9e7f6032",
    measurementId: "G-NJEGZMJF6N"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var fire = database.ref().child("Lab_details");
var val;

function getlab(roomId) {
    val = roomId;
    fire.on("value", gotData);
    function gotData(data) {
        data = data.val();
        let keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == roomId) {
                document.getElementById("lab").setAttribute("src", keys[i].two);
            }
        }
    }
}
