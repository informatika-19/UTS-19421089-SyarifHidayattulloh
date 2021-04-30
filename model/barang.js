const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const barangSchema = new Schema({
   kodeBarang: {
       type: String
   },
   namaBarang:{
       type: String
   },
   harga: {
       type: String
   },
   jumlahBarang: {

   }
})
module.exports = mongoose.model('barang', barangSchema)