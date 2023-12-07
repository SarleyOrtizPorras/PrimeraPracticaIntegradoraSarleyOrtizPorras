import messageModel from "../Models/message.js"

export default class MessageManager {
    getMessages = (params) =>{
        return messageModel.find(params).lean();
    }

    createMessage = (message) =>{
        return messageModel.create(message);
    }
}