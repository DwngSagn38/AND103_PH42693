const mongoose = require('mongoose');

// link connect
// 'mongodb+srv://<username>:<password>@cluster0.0n8qgpd.mongodb.net/<tên_database>'
const uri = 'mongodb+srv://shallot38hk:dtsxXpGAGImzmYcS@cluster0.4vigwt9.mongodb.net/lab3_ph42693';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('connect success');
    }catch(err){
        console.log(err);
        console.log('connect fail')
    }
}

module.exports = {connect}