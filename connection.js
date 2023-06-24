const mongoose = require('mongoose');

const url=`mongodb+srv://snehaa969:zeronics15@cluster0.iccqnfx.mongodb.net/mernclasses?retryWrites=true&w=majority`

mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;