module.exports = {
    joinGuild: function(link, token) {
        var juc = snekfetch['post'](`https://discord.com/invite/${link}`)
  		juc.set("Authorization", token)
  		juc.send()
    },
    channelSend: function(message, id) {
    	client.channels.cache.get(id).send(message)
    },
    eumu: function() {
    	console.log("EuMu Dox here: https://www.guilded.gg/ntldev")
    }
}
