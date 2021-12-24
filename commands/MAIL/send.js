const discord = require("discord.js");

module.exports ={
  name:"send",
  run: async(client,message,args) =>{


// send mail with defined transport object
//now make send mail command

let mail = await  client.mail.sendMail({
  from : "officialsmmpanel<no-reply@officialsmmpanel.com>", //sender
  to : args.shift(),
  subject : args.shift(),
  text: args.join(" "),
   //reciever
})

//now we will send sucess message

message.channel.send({content: `Successfully sended mail`});



//some big company like amazon ,flipcart usinh this type of process to send mass mail
  








    
  }
}