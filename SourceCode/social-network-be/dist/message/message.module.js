"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const message_gateway_1 = require("./message.gateway");
const message_controller_1 = require("./message.controller");
const chat_room_module_1 = require("../chat-room/chat-room.module");
const chat_room_service_1 = require("../chat-room/chat-room.service");
const typeorm_1 = require("@nestjs/typeorm");
const chat_room_repository_1 = require("../chat-room/chat-room.repository");
const chat_room_member_repository_1 = require("../chat-room-member/chat-room-member.repository");
const chat_room_member_service_1 = require("../chat-room-member/chat-room-member.service");
const message_repository_1 = require("./message.repository");
let MessageModule = class MessageModule {
};
MessageModule = __decorate([
    common_1.Module({
        imports: [chat_room_module_1.ChatRoomModule, typeorm_1.TypeOrmModule.forFeature([chat_room_repository_1.ChatRoomRepository, chat_room_member_repository_1.ChatRoomMemberRepository, message_repository_1.MessageRepository])],
        controllers: [message_controller_1.MessageController],
        providers: [message_service_1.MessageService, message_gateway_1.MessageGateway, chat_room_service_1.ChatRoomService, chat_room_member_service_1.ChatRoomMemberService],
    })
], MessageModule);
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.module.js.map