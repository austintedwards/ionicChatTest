import { Component } from '@angular/core';

import { App, NavController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import * as io from 'socket.io-client';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
      this.chats.push(msg);
    });
  }

  send(msg) {
        if(msg != ''){
          console.log('this', this)
            this.socket.emit('message', {msg:msg, page:"home"});
        }
        this.chat_input = '';
    }

  page1(){
    this.appCtrl.getRootNav().push(Page1Page)
  }
  page2(){
    this.appCtrl.getRootNav().push(Page2Page)

  }

}
