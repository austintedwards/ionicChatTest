import { Component } from '@angular/core';

import { App, NavController } from 'ionic-angular';
import * as io from 'socket.io-client';


@Component({
  selector: 'page1',
  templateUrl: 'page1.html'
})
export class Page1Page {
  socket:any
  chat_input:string;
  chats = [];

  constructor(
    public navCtrl: NavController,
    public appCtrl: App

  ){
    this.socket = io('http://localhost:3000');
    this.socket.on('message', (msg) => {
      console.log("message", msg);
      // msg.join('room1')
      this.chats.push(msg);
    });
  }

  send(msg) {
        if(msg != ''){
          console.log('this', this)
          console.log(this.socket)
          this.socket.emit('message', {msg:msg, page:"page1"});
        }
        this.chat_input = '';
    }

}
