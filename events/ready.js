let Parser = require('rss-parser');
let parser = new Parser();
var HTMLParser = require('node-html-parser');

module.exports = (client) => {

	client.user.setPresence({game: {name: 'OsWorld', type: 'PLAYING'}});
        
    setInterval(async () => {
        let feed = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UCVQaJ0AipeuQxP1ZOe7h_Vg'),
        	idrss = 0;

        if (client.fs.existsSync("variables_rss.txt")) idrss = client.fs.readFileSync("variables_rss.txt", "utf8");
        if (idrss == feed.items[0].link) return;

        client.fs.unlinkSync("variables_rss.txt");
        client.fs.writeFileSync("variables_rss.txt", feed.items[0].link);

        client.channels.get("553656183211163650").send(feed.items[0].title + "\n:video_camera: Подробнее: " + feed.items[0].link);

    }, 60000);

    console.log(`Бот авторизован как  ${client.user.tag}!`);
}
