//Ahmed Islam(Gaara) Bot Creation codes
//Main Package
const Discord = require('discord.js');
const bot = new Discord.Client();

//Secondary Package
const token = 'NjExOTkzNjAwNjUzMzk0MDY5.XVb6Wg.d4r9vi0PA586F_zC5jSJKuKKNys';

const prefix = '!';

var version = '1.0.1';

const usedCommandRecently = new Set();

//Bot Engine
bot.on('ready', () => {
    console.log('Ahmed Islam Bot is online');
    bot.user.setActivity('Spectra Clan UP (!)', {
        type: 'STREAMING'
    }).catch(console.error);

})
// Do not Delete ( WARN BY : AHMED ISLAM)
bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ")


// Logs Script


// Message Edit




bot.on("messageUpdate", async(oldMessage, NewMessage) => {

    if(oldMessage.content == newMessage.content){
        return;
    }

    var logchannel = client.channels.get("608724092958539786");
// Log Embed
    var logembed = new Discord.RichEmbed()
    .setAuthor(OldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("RED")
    .setDescription("Message Edited")
    .addField("Before", oldMessage.content, true)
    .addField("After", newMessage.content,true)
    .setTimestamp()
    //Send the Embed
    logchannel.send(logembed)
})




    // Cool down Commands
    switch (args[0]) {
        case 'Cooldown':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(" You must wait 5 seconds until you can use that command again");
            } else{
                message.reply('You are not a cool down');

                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                }, 5000);
            }

        break;
// ping command (ping)
        case 'ping':
            message.reply('UR FREAKING PING IS 0! عيل مبنق')
            break;

// help command (help)
        case 'help':
            message.channel.sendMessage(' بص يباشا انا البوت ابن الفتاكة لسة مش جاهز للاسف')
            break;
// kosomk command (kosomk)
        case 'kosomk':
            message.reply('كس امين امك و متشتمش يا تقعد هنا باحترام يا تطلع')
            break;
// info command (info)
        case 'info':
            if (args[1] === 'version') {
                message.channel.sendMessage('Im currently Version 1.0.0 انا حاليا في الاصدار الاول');
            } else {
                message.channel.sendMessage('Invalid Arguments  غلط يا علق')
            }
            break;
// Clear Command (Clear)
        case 'clear':
            if (!args[1]) return message.reply('Error please define second argument امسح كام؟')
            message.channel.bulkDelete(args[1]);
            break;
// Profile Command (Embed)
        case 'embed':
            const embed = new Discord.RichEmbed()
                .setTitle('User Information معلومات المستخدم')
                .addField('Player Name اسم المستخدم', message.author.username)
                .addField('Version الاصدار', version)
                .addField('Current Server السيرفر الحالي', message.guild.name)
                .setThumbnail(message.author.avatarURL)
                .addField('Created by: Ahmed Islam ( SP Gaara#7107 )')
                .setColor(0xFFED5)
            message.channel.sendEmbed(embed);
            break;
// Gamecracy server command (GC)
        case 'GC':
            message.channel.sendMessage(' Gamecracy | https://discord.gg/eeQKEd')
            break;
// FightTheStorm Server command (FTS)
        case 'FTS':
            message.channel.sendMessage(' Fight The Storm | https://discord.gg/rMeHpkX%27')
            break;

// Spectra Server Command (SP)
        case 'SP':
            message.channel.sendMessage('Spectra Clan | https://discord.gg/WkhnSr3 ')
            break;
// Credits Command (Credits)
        case 'Credits':
            message.channel.sendMessage('This bot and scripts were made and written by SP Gaara#7107 also known as Ahmed Islam (Real Name)')
            break;
// Loading Game Server (LG)
        case 'LG':
            message.channel.sendMessage(' Loading Game | https://discord.gg/7gY2gUD')
            break;
    
// Test Channel (Proof)
        case 'proof':
            message.reply(' Tezak 7amra ya ebn el wes5a ya Bloody ya m3fn ana Gaara')
            break;


            
        
            

    

// Broadcast command (BC)
        }
    bot.on("message", message => { 

        if (message.content.startsWith(prefix + "bc")) {
            if (!message.member.hasPermission("ADMINISTRATOR")) return;
            let args = message.content.split(" ").slice(1);
            var argresult = args.join(' ');
            message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
                m.send(`${argresult}\n ${m}`);
            })
            message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
            message.delete();
        
    {}};
    });
// Kick Command (Kick)
    bot.on('message', message => {
        if (!message.guild) return;
        if (message.content.startsWith('!kick')) {

            const user = message.mentions.users.first();

            if (user) {

                const member = message.guild.member(user);

                if (member) {


                    member.kick('Optional reason that will display in the audit logs').then(() => {

                        message.reply(`**Successfully kicked ${user.tag}** :Bus:   `);
                    }).catch(err => {
                        y
                        message.reply('I was unable to kick the member');

                        console.error(err);
                    });
                } else {

                    message.reply('That user isn\'t in this guild!');
                }

            } else {
                message.reply('You didn\'t mention the user to kick! :Bus:');
            }
        }
    
    });

}
);


bot.login(token)


// This bot and these commands were all made by "Ahmed Islam" Also known as "Gaara" and the discord id is "Gaara#7107" All credits to "Ahmed Islam (Gaara)"
//End