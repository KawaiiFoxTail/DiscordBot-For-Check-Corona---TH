const discord = require('discord.js');
var axios = require('axios');
const client = new discord.Client();

client.on('message', (msg) => { if(msg.content.startsWith(`${config.prefix}covidth`))
{
      axios.get(`https://covid19.th-stat.com/api/open/today`).then(response =>
  {
    var strfinished = "";
    JSON.parse(JSON.stringify(response.data), (key, value) => { strfinished += `${key}: ${value}\r\n`; });
    var strfinished2 = "";
    for(var i = 0; i < 12; i++) { strfinished2 += `${strfinished.split(/\r\n|\r|\n/)[i]}\r\n`; }
    strfinished2 = strfinished2.replace('Confirmed', 'Confirmed').replace('Recovered', 'Recovered').replace('Hospitalized', 'Hospitalized').replace('Deaths','Deaths').replace('NewConfirmed', 'NewConfirmed').replace('NewRecovered', 'NewRecovered');
    const embed = new discord.MessageEmbed().setTitle('Check Covid19 - Thailand').setDescription(`\r\n\r\n${strfinished2}\r\n\r\n`).setColor('#4AE538').setFooter('𝓞𝓱𝓪𝔂𝓸𝓞𝓷𝓲𝓲𝓒𝓱𝓪𝓷#0001').setThumbnail('https://www.flashfly.net/wp/wp-content/uploads/2020/01/2dc850d9-afc0-4dc1-bd63-3132bd601261-large16x9_MGN_1280x960_00124B00MCBIZ.jpg'); msg.channel.send(embed); console.log('\x1b[32m','Check Covid - TH',' ! ','\n');
  });
}});

client.login(config.token);
