require('express')()

.get("/ippChimbanda", ( req, res)=>{
        return res.sendFile(__dirname + "/views/index.html")
})
.listen(5500)

