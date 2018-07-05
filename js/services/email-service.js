'use strict';

export default {
    getEmails,
    addEmail
}

var emails =[
    {title:'First Email', sender:'OmgThey@killed.kenny',date:new Date(Date.now()), msg:'kenny is dead'},
    {title:'Second Email', sender:'Barney@theDino.com',date:new Date(Date.now()-8000), msg:'im a purple dinosaur'},
    {title:'Third Email', sender:'Unicorn@woohoo.com',date:new Date(Date.now()-5000), msg:'i fart rainbows'}
]

function getEmails(){
    return Promise.resolve(emails);
}

function addEmail(email){//email is an object
    emails.push(email)
}