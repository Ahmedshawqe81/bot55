const Discord = require("discord.js"); 
const client = new Discord.Client(); 






var prefix = 's!'
client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by Ahmed');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});
client.on('ready', () => {
     client.user.setActivity("!!help | للاستعمال",{type: 'WATCHING'})

});

client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('!!bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `Owner`' );  
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "ℊℯℯ𝖪𝒴 𝓞𝓟";
    let request = `Requested By ${message.author.username}`;  
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))  
    .then(() =>msg.react('✅'))  



    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });  
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });  
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));  
    message.guild.members.forEach(m => {
    var bc = new  
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle(':smile: Welcome guys:heart_eyes: ') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)  
       .addField('الرساله', args)  
       .setThumbnail(message.author.avatarURL)  
       .setFooter(copy, client.user.avatarURL); 
    m.send({ embed: bc })
    msg.delete();  
    })
    })
    reaction2.on("collect", r => {  
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));  
    msg.delete();  
    })  
    }) 
    }  
    }) 
   
client.on('message',async message => {
    const moment = require('moment');
const ms = require('ms')
    var prefix = '!!' //بريفكس البوت
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) { // الامر
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **ارسل اسم الروم**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم استطيع ايجاد الروم :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **الوقت للقيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**البوت لا يدعم هذا الوقت**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **ارسل جائزه القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :fire:  **𝗚𝗜𝗩𝗘𝗔𝗪𝗔𝗬**  :fire: ' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **ليس لدي برمشن المطلوب**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});


client.on('message', message => {
            if (message.content.startsWith("s!help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('!!report | للتبليغ عن شخص مأ للاونر')
.addField('!!say | تخلي البوت يقول كلام معين انت تكتبه للادمن بس')
.addField('!!bc | لعمل برودكاست لجميع الاعضاء في السيرفر للادمن بس')
.addField('!!giveaway | لعمل جيف اواي لاعضاء السيرفر')
.addField('!!clear | لحذف الشات ')
.addField('!!server | للحصول علي معلومات السيرفر')
.addField('!!ban | لتبنيد شخص ')
.addField('!!kick | لطرد شخص من السيرفر ')
.setColor("RANDOM")
  message.channel.sendEmbed(embed);
    }
});
 


client.on('message', message => {
         var prefix = "!!"
       if (message.author.x5bz) return;
       if (!message.content.startsWith(prefix)) return;

       let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);

       let args = message.content.split(" ").slice(1);

       if (command == "kick") {
                    if(!message.channel.guild) return message.reply('** This command only for servers**');

       if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
       if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
       let user = message.mentions.users.first();
       let reason = message.content.split(" ").slice(2).join(" ");
       if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
       if(!reason) return message.reply ("**اكتب سبب الطرد**");
       if (!message.guild.member(user)
       .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

       message.guild.member(user).kick();

       const kickembed = new Discord.RichEmbed()
       .setAuthor(`KICKED!`, user.displayAvatarURL)
       .setColor("RANDOM")
       .setTimestamp()
       .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
       .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
       .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
       message.channel.send({
         embed : kickembed
       })
     }
     });


client.on('message', message => {
    var prefix = "!!";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.channel.send(`مثال | !!ban @Prime Cam 5d`);
  if(!reason) return message.channel.send(`مثال | !!ban @Prime Cam 5d`);
  if (!message.guild.member(user)
  .bannable) return message.reply(`This User Is Have High Role !`);
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
client.login(process.env.BOT_TOKEN);
