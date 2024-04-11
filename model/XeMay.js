const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const XeMayMoDel = new Schema({
    ten_xe_ph1234 : {type: String, required : true},
    mau_sac_ph1234 : {type: String, required : true},
    gia_ban_ph1234 : {type: Number, required : true, default :0},
    mo_ta_ph1234 : {type: String},
    hinh_anh_ph1234 : {type: String}
})

module.exports = mongoose.model("xemay",XeMayMoDel);