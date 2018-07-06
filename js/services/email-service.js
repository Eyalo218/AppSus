'use strict';
var id = 3;
export default {
    getEmails,
    addEmail
}

var emails =[
    {id:0,read:true,title:'First Email', sender:'OmgThey@killed.kenny',date:new Date(Date.now()), msg:'kenny is dead'},
    {id:1,read:false,title:'Second Email', sender:'Barney@theDino.com',date:new Date(Date.now()-8000), msg:'im a purple dinosaur'},
    {id:2, read:true,title:'Third Email', sender:'Unicorn@woohoo.com',date:new Date(Date.now()-5000), msg:'i fart rainbows'}
]

function getEmails(){
    return Promise.resolve(emails);
}

function addEmail(email){//email is an object
    emails.push(email)
}