const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `q!banned = Dene ve Gör! \nq!avatarım = Avatarınınızı Gösterir. \nq!herkesebendençay = Herkese Çay Alırsınız. \nq!koş = Koşarsınız.\nq!çayiç = Çay İçersiniz. \nq!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nq!çayaşekerat = Çaya Şeker Atarsınız. \nq!yumruk-at = Yumruk Atarsınız. \nq!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nq!sunucuresmi = BOT Sunucunun Resmini Atar. \nq!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nq!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkili Komutları**", `q!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nq!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nq!unban = İstediğiniz Kişinin Yasağını Açar. \nq!sustur = İstediğiniz Kişiyi Susturur. \nq!oylama = Oylama Açar. \nq!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "q!yardım = BOT Komutlarını Atar. \nq!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nq!ping = BOT Gecikme Süresini Söyler. \nq!davet = BOT Davet Linkini Atar. \nq!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **<@361100685863026688>** ")
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
