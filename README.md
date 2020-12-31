# RandoMon
<p>
    <a href="https://www.npmjs.com/package/randomon"><img alt="NPM Version" src="https://img.shields.io/npm/v/randomon"></a>
    <a href="https://github.com/thekevinava/RandoMon/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/thekevinava/RandoMon"></a>
    <a href="https://www.npmjs.com/package/randomon"><img alt="NPM License" src="https://img.shields.io/npm/l/randomon"></a>
    <a href="https://www.npmjs.com/package/randomon"><img alt="NPM Downloads" src="https://img.shields.io/npm/dt/randomon"></a>
    <a href="https://discord.gg/gAFRJpasj5"><img alt="Discord" src="https://img.shields.io/discord/791333925968412703?color=%237289DA&label=Discord&logo=discord"></a>
    <a href="https://www.npmjs.com/package/randomon">NPM</a>
</p>

The principal function for this package is handle all URLs sended by users on a server and delete it if you want.

- [Support](#support)
- [Installation](#installation)
- [Examples](#examples)
    - [Basic Use](#basic-use)
- [License & Credits](#license)

# Support

You can contact us on your [Discord server](https://discord.gg/gAFRJpasj5)

# Installation
Using NPM:
```js
npm install randomon
```
Using Yarn (Linux):
```js
yarn add randomon
```

# Examples

## Basic use
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const RandoMon = require('randomon'); // Js


client.once('ready', () => console.log('Bot is online!'));

client.on('message', async message => {
    if(message.content=="!random") {
        let randomImage = RandoMon(); // Generate the image
        message.channel.send(randomImage); // Send the image
    }
});

client.login('TOKEN_HERE');
```

# License & Credits

Made with [@aonsager](https://github.com/aonsager) website. (Web)[https://pokemon.alexonsager.net/]

MIT

