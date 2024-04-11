const mongoose = require("mongoose");

const uri = 'mongodb+srv://shallot38hk:62WWpx8QQGvpyzTk@cluster0.4vigwt9.mongodb.net/Thithu'

const connect = async () => {
    try {
        console.log("Connect success")
        mongoose.connect(uri);
    } catch (error) {
        console.log(error);
        console.log("Connect fail")
    }
}

module.exports = {connect}