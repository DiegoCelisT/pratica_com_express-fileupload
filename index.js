const express = require('express')
const fileUpload = require('express-fileupload')
const { v4: uuidv4 } = require('uuid') //Para gerar um nome aleatorio

const app = express()

app.use(fileUpload())
app.post('/upload', (req, res) => {

    if (!req.files){
        res.status(400).send('Sem arquivos!')
    }
    let img = req.files.imagem
    let nome = uuidv4(req.files.imagem.name)
    let ext = req.files.imagem.mimetype.split('/')[1]
    img.mv(`assets/images/${nome}.${ext}`) //Para mover o arquivo para a pasta que eu quiser!
    return res.json({ msg: "OK!"})
})

app.listen(3333, () => console.log('ON'))