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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var firebaseOrdersCollection = database.ref().child('Lab_details');

async function launchlab(roomId) {
    var content;
    console.log("here, in the room");
    await $.get(
        "https://f1c394c44e6a.ngrok.io",
        function(data) {
            content = data;
            console.log(content.one);
            console.log(content.two);
            var details = {
                one: content.one,
                two: content.two
            };
            firebaseOrdersCollection.child(roomId).set(details);
        }
    );
    document.getElementById("lab").setAttribute("src", content.one);
}

/*function getlab(roomId) {
    const val = roomId;
    console.log("getting the lab");
    firebaseOrdersCollection.on("value", (data) => {
        var scores = data.val();
        console.log(scores);
        var keys = Object.keys(scores);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (keys[i] == roomId) {
                console.log("found");
                var two = scores[k].two;
                document.getElementById("lab").setAttribute("src", two);
                break;
            }
        }
    });
}
*/


function getlab(roomId) {
    var val = roomId;
    firebaseOrdersCollection.on("value", gotData);

    function gotData(data) {
        var scores = data.val();
        console.log(scores);
        console.log("inside");
        console.log(roomId);
        var keys = Object.keys(scores);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (keys[i] == roomId) {
                console.log("found");
                var two = scores[k].two;
                document.getElementById("lab").setAttribute("src", two);
                console.log(two);
            }
        }
    }
}