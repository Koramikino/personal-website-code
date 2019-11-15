const fs = require('fs');
fs.writeFile('public/CNAME', 'koraloudermilk.me', function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("wrote CNAME")
})