import React, { Component } from 'react';
import Cam from '../img/cam.png';
import Add from '../img/Add.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';
export class Chat extends Component {
  render() {
    return (
      <div className='chat'>
        <div className='chatInfo'>
          <span>Jmal</span>
        {/* <div className='chatIcons'>
          <img src={Cam} alt='' />
          <img src={Add} alt='' />
          <img src={More} alt='' />
        </div> */}
        </div>
        <Messages/>
        <Input/>
      </div>

    );
  }
}

export default Chat;
