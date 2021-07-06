import React from "react";
import moment from "moment";
import { Link } from 'react-router-dom'
import { Button, Comment, Image } from "semantic-ui-react";

const isOwnMessage = (message, user) => {
  return message.user.id === user.uid ? "message__self" : "";
};

const isImage = message => {
  return message.hasOwnProperty("image") && !message.hasOwnProperty("content");
};

const isLink = message => {
  return modalTrigger.test(message.content);
}
const alignment=(message,user)=>{
  if(message.user==user)
   return "left";
   else 
   return "right";
}
const timeFromNow = timestamp => moment(timestamp).fromNow();
const modalTrigger = new RegExp("https://clonoteams.herokuapp.com/room.html[.]*");
const Message = ({ message, user,currentUser }) => (
  // var res = modalTrigger.test(message.content);
  <Comment float={alignment(message,user)}>
    <Comment.Avatar src={message.user.avatar} />
    <Comment.Content className={isOwnMessage(message, user)}>
      <Comment.Author as="a">{message.user.name}</Comment.Author>
      <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>
      {/* {()=>{
        if(isImage(message))
        {
          return (<Image src={message.image} className="message__image" />)
        }
        else if(isLink(message))
        {
          return (<Comment.Text as={Link} to={message.content}>Start Call</Comment.Text>)
        }
        else{
          return (<Comment.Text>{message.content}</Comment.Text>)
        }
      }} */}
      {isImage(message) ? (
        <Image src={message.image} className="message__image" />
      ) : (        
        isLink(message) ? (
          <a href={message.content+user.displayName} target="_blank"><br/>
            <Button>Start Call</Button>
          </a>
        ) : (
        <Comment.Text>{message.content}</Comment.Text> )        
      )}
    </Comment.Content>
  </Comment>
);

export default Message;
