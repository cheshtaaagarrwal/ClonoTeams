import React from "react";
import { render } from 'react-dom';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

class ModalTrigger extends React.Component {
  state={
    open:false,
    setOpen:this.props.setOpen
    
  }
  render(){
  
    return (
      <div>
        <Modal
        onClose={() => this.state.setOpen(false)}
        onOpen={() => this.state.setOpen(true)}
        open={this.state.open}
        // trigger={<Button>Show Modal</Button>}
      >
      {/* <Modal> */}
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => this.setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => this.state.setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
      </div>
    );
  };
};

export default ModalTrigger