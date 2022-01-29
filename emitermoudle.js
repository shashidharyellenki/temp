const EmiterEmmit = require('events');

const emiter = new EmiterEmmit()

emiter.addListener('logged',(e)=>{
    console.log('this is addevent log',e);
})

emiter.emit('logged',{'id':1, 'url':'htp://google.com'})


