module.exports = member => {
    let username = member.user.username;
    member.send('Sunucuya Hoş Geldin ! Ben de Seni Bekliyordum ^^ :tada: :wink: :innocent:');
    member.guild.defaultChannel.send('Aramıza Hoşgeldin '+username+' , iyi vakit geçirmen dileğiyle ^^ :tada: :wink: :innocent:');
}
