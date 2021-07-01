// var firebaseConfig = {
//         apiKey: "AIzaSyDkaU5im4Hj7QsqQDFVkM3_kKyF1YGQI4Q",
//         authDomain: "remo-e30b0.firebaseapp.com",
//         databaseURL: "https://remo-e30b0.firebaseio.com",
//         projectId: "remo-e30b0",
//         storageBucket: "remo-e30b0.appspot.com",
//         messagingSenderId: "318553256084",
//         appId: "1:318553256084:web:955bfc1a10af2b009d4481"
// };

// firebase.initializeApp(firebaseConfig);
import React from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,Redirect,
    Route,
    withRouter
  } from "react-router-dom";
import { useHistory } from "react-router-dom";

// import { Header, Segment, Input, Icon } from "semantic-ui-react";
import firebase from "../firebase";
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
// firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var firebaseOrdersCollection = database.ref().child('Interview_details');

const KEY_SIZE = 15;

var rand = random(KEY_SIZE);
function Schedule(){
    // event.preventDefault();
    console.log("Hello World");
    sendmail();
    }
function sendmail() {

    rand = random(KEY_SIZE);
    submitdetails();
}

function random(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return (result);
}

function submitdetails() {
    var details = {
        
        Key: rand,
    };

    firebaseOrdersCollection.child(rand).set(details);
    // console.log(`The key to join is `+ rand + "<br>"+"<a href='./Room/room.html?key="+rand+"'>Link to join</a>");
    // window.open("./src/Room/room.html?key="+rand);
    

    // document.getElementById("details").innerHTML = `The key to join is `+ rand + "<br>"+"<a href='./Room/room.html?key="+rand+"'>Link to join</a>";
    // <Redirect push to={str}/>
    // browseRouter.push(str)
    // let history = useHistory()
    // console.log(history)

    // history.push(str)
    // <Switch>
    // <Redirect to ={str} />
    // </Switch>
    window.location.href="./src/Room/room.html?key="+rand;
    // window.open(openPage(rand))
    // console.log(process.env.PUBLIC_URL + "room.html");
    // <a target="_blank" href={process.env.PUBLIC_URL + "room.html"} > terminos</a>
};

function openPage(id)
{
    id = "12Ox3zr3aYOX6rx"
    const str = "./room.html?key="+id;
    // return(
    //     <Switch>
    //     <Redirect to={str}></Redirect>
    // </Switch>
    return("http://localhost:3006/src/Room/room.html?key="+id);

    // window.open("C:/webd/Teams/src/Room/room.html?key="+id, "_blank")
    // )
}

export {Schedule, openPage}






