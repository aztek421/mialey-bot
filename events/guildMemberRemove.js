module.exports = member => {
  let guild = member.guild;
  member.send('Sunucudan Ayrıldın ,bu beni üzdü :sob: :sob: :sob: ');
  guild.defaultChannel.send('Aramızdan ayrıldı '+username+' ,:sob: :sob: :sob: ');
};
