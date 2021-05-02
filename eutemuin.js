module.exports = {
    log: function(tolog) {
        console.log(tolog)
    },
    joinGuild: function(link, token) {
        var juc = snekfetch['post'](`https://discord.com/invite/${link}`)
  		juc.set("Authorization", token)
  		juc.send()
    },
    leaveGuild: function(serverid, token) {
        bot.guild.leave(serverid) // tysm https://github.com/ntloff/
    },
    dmSend: function(message, userid) {
        log("coming soon")
    },
    channelSend: function(message, id) {
    	client.channels.cache.get(id).send(message)
    },
    eumu: function() {
        log("EuMu API Succesfully loaded!")
    	log("EuMu Dox here: https://www.guilded.gg/Eutemuin")
        log("\n")
    }
}
