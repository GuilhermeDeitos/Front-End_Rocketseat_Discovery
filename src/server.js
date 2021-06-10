require('express')()
.get("/",(req, res) => {
    return res.send(_dirname + "/views/index.html")
})

.get("/study", (req, res) => {
    return res.send("Study")
})
.listen(5500)

