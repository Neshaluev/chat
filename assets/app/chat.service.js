import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
var ChatService = /** @class */ (function () {
    function ChatService() {
        this.socket = io('http://localhost:3000');
    }
    ChatService.prototype.joinRoom = function (data) {
        this.socket.emit('join', data);
    };
    ChatService.prototype.newUserJoined = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('new user joined', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.leaveRoom = function (data) {
        this.socket.emit('leave', data);
    };
    ChatService.prototype.userLeftRoom = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('left room', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.sendMessage = function (data) {
        this.socket.emit('message', data);
    };
    ChatService.prototype.newMessageReceived = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('new message', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ChatService.ctorParameters = function () { return []; };
    return ChatService;
}());
export { ChatService };
