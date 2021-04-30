const barangModel = require ('../model/barang')
const objectId = require ('mongoose').Types.ObjectId

exports.simpanbarang = (data)=>
new Promise ((resolve, reject)=>{
    barangModel.create(data)
    .then(()=>{
        resolve({
            sukses: true,
            pesan: 'Berhasil Input Barang'
        })
    }).catch(()=>{
        reject({
            sukses: false,
            pesan: 'Gagal Input Barang'
        })
    })
})

exports.tampilbarang = () =>
new Promise ((resolve, reject) => {
    barangModel.find()
    .then(data => {
        resolve({
            sukses: true,
            pesan: 'Berhasil Membuat Data',
            data: data
        })
    }).catch(() =>{
        reject({
            sukses: false,
            pesan: 'Gagal Membuat Data',
            data: []
        })
    })
})

exports.edit = (data, id) =>
new Promise ((resolve, reject) =>{
    barangModel.updateOne({
        _id: objectId(id)
    }, data).then(()=>{
        resolve({
            sukses: true,
            pesan : 'Berhasil Mengubah Data'
        })
    }).catch(() =>{
        reject({
            sukses: false,
            pesan: 'Gagal Mengubah Data'
        })
    })
})
exports.tampilkanSatuData = (id) =>
new Promise((resolve, reject)=>{
    barangModel.findOne({
        _id: objectId(id)
    }).then((data) =>{
        resolve(data)
    }).catch(() => reject({
        sukses: false,
        pesan : 'Gagal Membuat Data'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject)=>{
    barangModel.deleteOne({
        _id: objectId(id)
    }).then(() =>{
        resolve({
            sukses: true,
            pesan : 'Berhasil Menghapus Data'
        })
    }).catch(() =>{
        reject({
            sukses: false,
            pesan: 'Gagal Menghapus Data'
        })
    })
})