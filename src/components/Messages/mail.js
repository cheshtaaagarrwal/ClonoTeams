import React from "react";
import firebase from "firebase";
import jQuery from "jquery";

import ModalExampleModal from "./modal";
import uuidv4 from "uuid/v4";
import { render } from "react-dom";
const KEY_SIZE = 15;

function random(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return (result);
}
var rand=random(KEY_SIZE);
class Mail extends React.Component {
    state={
        channel: this.props.currentChannel,
       user:this.props.currentUser,
         message:"",
         rand:"",
    };




createMessage = (fileUrl = null) => {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.state.user.uid,
        name: this.state.user.displayName,
        avatar: this.state.user.photoURL
      }
    };
    if (fileUrl !== null) {
      message["image"] = fileUrl;
    } else {
      message["content"] = this.state.message;
    }
    return message;
  };
  sendMessage = () => {
    const { getMessagesRef } = this.props;
    const { message, channel, user, typingRef } = this.state;

    if (message) {
      this.setState({ loading: true });
      getMessagesRef()
        .child(channel.id)
        .push()
        .set(this.createMessage())
        .then(() => {
          this.setState({ loading: false, message: "", errors: [] });
        })
    }
}
  submitdetails(){
    var details = {
        
        Key: rand,
    };
    this.state.message="hey";
   
   this.sendMessage();
    // window.open("https://clonoteams.herokuapp.com/room.html?room="+rand,"_blank");
    
}
render(){
    return(
        <div>
     {this.submitdetails}
    </div>
    );
} 
}

export default this.submitdetails






