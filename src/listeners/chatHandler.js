import MessageManager from "../dao/mongo/Managers/messages.js";

const messagesService = new MessagesManager();
 
const saveMessage = (io,socket) =>{
    const saveMessage = async(message) =>{
        await messagesService.createMessage(message);
        const messageLogs = await messagesService.getMessages();
        io.emit('chat:messageLogs',messageLogs);
    }

    const newParticipant = (user) => {
        socket.broadcast.emit('chat:newConnection')
    }
}