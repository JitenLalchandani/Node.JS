const EventEmitter=require('events');
const customEmitter=new EventEmitter();
customEmitter.on('response',(name,id)=>{
    console.log(`data: Name: ${name} & Id: ${id}`)
})
customEmitter.emit('response','Jiten',7)