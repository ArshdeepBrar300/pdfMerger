import express from "express"
import  path from "path"
import multer from "multer"
import { mergePdfs } from "./actions/merge.js"
const app=express()
const port=3000
const __dirname=path.resolve();
const upload=multer({dest:'uploads/'})

app.use('/static',express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'templates/index.html'))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res) => {
    const { pages1, pages2 } = req.body; // Assuming you're passing page ranges in the request body

    let newFile = await mergePdfs(
        path.join(__dirname, req.files[0].path),
        path.join(__dirname, req.files[1].path),
        pages1,
        pages2
    );
    res.redirect(`/static/${newFile}`);
});


app.listen(port,()=> {console.log('server running at localhost: ',port)})