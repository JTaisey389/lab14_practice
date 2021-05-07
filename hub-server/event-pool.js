'use strict';

const PORT = process.env.QUEUE_PORT || 3000
const uuid = require('uuid').v4;
const io = require(socket.io)(3000); // npm init -y npm i socket.io TODO

//In memory queue
const Queuue = {
  chores: {}
}

const family = io.of('/family');

//socket is representational of the client who connected to the server/namespace
family.on('connection', socket => {
  //this adds the item to the chores queue and let's the family know
  socket.on('new chore', payload => {
    let id = uuid();
    Queuue.chores[id] = payload;
    socket.emit('added');
    family.emit('chore', { id, payload });// this broadcasts to the family/or message chat that a chore was added
  })
  
  //let the child see the list of their chores in the queue
  socket.on('getAll', payload => {
    
  })
  // once the child has done the chore, the chore will be deleted
  socket.on('received', payload => {
    
  })
})

