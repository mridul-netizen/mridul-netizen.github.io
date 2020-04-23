//dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms =document.querySelector('.chat-rooms');  

//add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
})
//update new name
newNameForm.addEventListener('submit',e => {
    e.preventDefault();
    //update name via chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //reset the form
    newNameForm.reset();
    //show then hide the update message
    console.log(newName); 
    updateMsg.innerText = `your name was updated to ${newName}`; 
    setTimeout(() => updateMsg.innerText ='',3000);
});
//update the chat room
rooms.addEventListener('click',e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
});

//check local storage for a name
const username = localStorage.username ? localStorage.username : 'naamdaalbisi';

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming',username);

//get chats and render
chatroom.getChats((data) => {
    chatUI.render(data);
})