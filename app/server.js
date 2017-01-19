const express = require("express"),
          app = express(),
        inst = require('instagram-node').instagram();


inst.use({
    access_token: '3429170788.1677ed0.cfc7dcedf3d14ee69130f406d53e2daa'
})

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    inst.user_self_media_recent( function(err, medias, pagination, remaining) {
        res.render('pages/index', {grams: medias})
    })
});

app.listen(8080);

console.log('App started');