/**
 * Created by WS33 on 4/19/2017.
 */
'use strict';
let { EventEmitter }  = require('events');

let serviceEndPoints = require('./../constants/serviceEndPoints');
let services = require('../webServices/web-services');
let ActionTypes = require('./../constants/actionTypes');
let Dispatcher = require('./../dispatcher/dispatcher');

let CHANGE_EVENT = 'change';
let LoginStore = Object.assign({}, EventEmitter, {
  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  },
  emitChange(){
    this.emit(CHANGE_EVENT);
  }
});

Dispatcher.register(function (action) {
  switch (action) {
    case ActionTypes.USER_LOGIN:
      services.get(serviceEndPoints.USER_LOGIN);
      LoginStore.emitChange();
      break;
    case ActionTypes.REGISTER_USER:
      services.post();
      LoginStore.emitChange();
      break;
  }
});