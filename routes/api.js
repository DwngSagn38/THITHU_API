var express = require('express');
var router = express.Router();

const Xemays = require('../model/XeMay')

//Hiển thị danh sách, 
router.get('/danhsach', async (req,res) => {
    try {
        const result = await Xemays.find();
        if(result){
            res.json({
                status : 200,
                masage : "Get list ook",
                data : result
            }) 
        }else{
            res.json({
                status : 403,
                masage : "Get list fail",
                data : []
            })
        }
    } catch (error) {
        console.log(error);
    }
})

//Xem chi tiết 1 bản gh
router.get('/chitiet/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const result = await Xemays.findById(id);
        if(result){
            res.json({
                status : 200,
                masage : "Get chi tieest ook",
                data : result
            }) 
        }else{
            res.json({
                status : 403,
                masage : "Get chi tieest fail",
                data : []
            })
        }
    } catch (error) {
        console.log(error);
    }
})


// Thêm mới bản ghi
router.post('/add', async (req,res) => {
    try {
        
        const data = req.body;

        const xemay = new Xemays({
            ten_xe_ph1234 : data.ten_xe_ph1234,
            mau_sac_ph1234 : data.mau_sac_ph1234,
            gia_ban_ph1234 : data.gia_ban_ph1234,
            mo_ta_ph1234 : data.mo_ta_ph1234,
            hinh_anh_ph1234 : data.hinh_anh_ph1234
        })

        const result = await xemay.save();

        if(result){
            res.json({
                status : 200,
                masage : "add ook",
                data : result
            }) 
        }else{
            res.json({
                status : 403,
                masage : "add fail",
                data : []
            })
        }
    } catch (error) {
        console.log(error);
    }
})


//Xoa 1 bản gh
router.delete('/delete/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const result = await Xemays.findByIdAndDelete(id);
        if(result){
            res.json({
                status : 200,
                masage : "Delete ook",
                data : result
            }) 
        }else{
            res.json({
                status : 403,
                masage : "Delete fail",
                data : []
            })
        }
    } catch (error) {
        console.log(error);
    }
})

// update
router.put('/update/:id', async (req,res) => {
    try {
        
        const {id} = req.params;
        const data = req.body;
        const result = await Xemays.findByIdAndUpdate(id,data,{new : true});

        if(result){
            res.json({
                status : 200,
                masage : "update ook",
                data : result
            }) 
        }else{
            res.json({
                status : 403,
                masage : "update fail",
                data : []
            })
        }
    } catch (error) {
        console.log(error);
    }
})

// tim kiem theo ten
router.get('/timkiem', async (req,res) => {
    try {
        const {key} = req.query;
        const result = await Xemays.find({ten_xe_ph1234 : {"$regex" : key, "$options" : "i"}});

        if(result){
            res.json({
                status : 200,
                masage : "search ook",
                data : result
            }) 
        }else{
            res.json({
                status : 403,
                masage : "search fail",
                data : []
            })
        }
    } catch (error) {
        console.log(error);
    }
})

// sap xep theo gia
router.get('/sapxep', async (req,res) => {
    try {
        const {type} = req.query;
        let result = null;
        if (type == 1){
            result = await Xemays.find().sort({ gia_ban_ph1234 : 1})
        }else{
            result = await Xemays.find().sort({ gia_ban_ph1234 : -1})
        }

        if(result){
            res.json({
                status : 200,
                masage : "search ook",
                data : result
            }) 
        }else{
            res.json({
                status : 403,
                masage : "search fail",
                data : []
            })
        }
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;
