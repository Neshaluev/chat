import { Component } from '@angular/core';
import { ChatService } from './chat.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(_chatService) {
        var _this = this;
        this._chatService = _chatService;
        this.messageArray = [];
        this._chatService.newUserJoined()
            .subscribe(function (data) { return _this.messageArray.push(data); });
        this._chatService.userLeftRoom()
            .subscribe(function (data) { return _this.messageArray.push(data); });
        this._chatService.newMessageReceived()
            .subscribe(function (data) { return _this.messageArray.push(data); });
    }
    AppComponent.prototype.join = function () {
        this._chatService.joinRoom({ user: this.user, room: this.room });
    };
    AppComponent.prototype.leave = function () {
        this._chatService.leaveRoom({ user: this.user, room: this.room });
    };
    AppComponent.prototype.sendMessage = function () {
        this._chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css'],
                    providers: [ChatService]
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return [
        { type: ChatService, },
    ]; };
    return AppComponent;
}());
export { AppComponent };
