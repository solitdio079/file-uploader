import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import cors from 'cors'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) +"."+file.mimetype.split("/")[1]
    cb(null, file.fieldname + '-' + uniqueSuffix)
  },
})

const upload = multer({ storage: storage })


try {
    await mongoose.connect("mongodb://localhost:27017/file_uploads")
    console.log("Connected to database");
} catch (error) {
    console.log(error.message);
}
const corsOptions = {
  origin: 'http://localhost:5174',
  optionsSuccessStatus: 200,
}
const port = process.env.PORT || 3000
const app = express()
app.use('/static', express.static('./uploads'))

app.use(cors(corsOptions))


app.post('/single', upload.single('single_file'), (req, res) => {
    res.send({status: 200, data: req.file.filename})
})

app.listen(port, ()=> {console.log(`Listening on port: ${port}`);})
