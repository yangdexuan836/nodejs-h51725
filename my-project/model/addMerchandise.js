var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddMerchandise = new Schema({
	number:String,
    goods_name : String,
    price      : String,
    img        :String,
    create_date : { type: Date, default: Date.now }
});
var AddMerchandise = mongoose.model('goods',AddMerchandise);
module.exports=AddMerchandise
