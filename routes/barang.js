const router = require('express').Router()
const barangController = require("../controller/barang")

router.post('/input', (req, res)=>{
    barangController.simpanbarang(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampil', (req, res)=>{
    barangController.tampilbarang()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})
router.put('/edit/:id', (req, res) =>{
    barangController.edit(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.get('/tampilsingle/:id',(req, res)=>{
    barangController.tampilkanSatuData(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(ress))
})
router.delete('/delete/:id',(req, res)=>{
    barangController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(ress))
})

module.exports = router