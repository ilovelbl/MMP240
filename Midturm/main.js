var upload = document.getElementById("upload");
var massage = document.getElementById("message");
var reaction = [];
var reactionElements = document.getElementsByClassName("reaction");

upload.onclick = function() {
    for (var i = 0; i < reactionElements.length;i++)
        reaction.push(reactionElements[i].value);

    message.innerHTML = "Hello " + reaction[1] + " " +reaction[0] + ", Who love" + reaction[2] + ", welcome to 20-1 Animation Festival." + "Thank you for your comments which is about " +reaction[3];
};
