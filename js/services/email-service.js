'use strict';
var id = 3;
export default {
    getEmails,
    addEmail,
    getEmailById,
    unreadAmount,
    deleteEmailById,
    setReadStatus
}

var emails =[
    {id:0, subject:'First Email', sentAt:getDate(), body:'kenny is dead', isRead:false},
    {id:1, subject:'Second Email', sentAt:getDate(), body:'Barney the purple dinosaur',isRead:false},
    {id:2, subject:'Third Email', sentAt:getDate(), body:'Does unicorn fart rainbows?',isRead:false}
]

function getDate(){
    var date = new Date()
    var strDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.toLocaleTimeString()}`;
    return strDate;
}

function getEmails(){
    return Promise.resolve(emails);
}

function addEmail(email){//email is an object
    email.id = id;
    emails.push(email)
    id++
    return Promise.resolve(true);
}

function getEmailById(id) {
    return Promise.resolve(emails.find(email => email.id === +id))
}

function deleteEmailById(id){
    var index = emails.findIndex(email =>{
        return email.id ===+id;
    })
    emails.splice(index,1);
    return Promise.resolve(index!==-1);
}

function unreadAmount(){
    var counter =0;
    emails.forEach(
        email=>{
            if(!email.isRead) counter++
        }
    )
    return counter;
}

function setReadStatus(id, statusBool){
    emails.find(email => email.id === +id).isRead = statusBool;
    window.Emails = emails;
}