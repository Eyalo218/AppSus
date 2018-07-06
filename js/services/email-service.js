'use strict';
var id = 3;
export default {
    getEmails,
    addEmail
}

var emails =[
    {id:0, subject:'First Email', sentAt:new Date(Date.now()), body:'kenny is dead', isRead:false},
    {id:1, subject:'Second Email', sentAt:new Date(Date.now()-8000), body:'Barney the purple dinosaur',isRead:false},
    {id:2, subject:'Third Email', sentAt:new Date(Date.now()-5000), body:'Does unicorn fart rainbows?',isRead:false}
]

function getEmails(){
    return Promise.resolve(emails);
}

function addEmail(email){//email is an object
    emails.push(email)
}