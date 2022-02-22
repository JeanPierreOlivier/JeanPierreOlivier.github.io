var fs = require('fs');
var https = require('https');

fs.writeFile(`${__dirname}/index.html`, "<h1>HTML is great</h1>", function(error) {
    if (error){
        return console.log(error);
    } else {
        return console.log ("Congrats");
    }
});

var myPhotoLocation = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Vanellus_vanellus_1.jpg'
https.get(myPhotoLocation, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/myPicture.jpg"));
});