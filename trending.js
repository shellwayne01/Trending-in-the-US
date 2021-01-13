const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/trending.html'));
})

//Comments are the path paramenter and comment ids are the query parameters (later)
//no resource called addNewComment so be careful
// app.post('/comments/:id/addNewComment', (req, res) => {
//   console.log(req.query)
//
// })

//ADD TO LOCAL STORAGE OR JSON OR DATABASE (later)
app.post('/:id', (req, res) => {
  // console.log(req.query);  //itworks so I can ignore this now and focus on the returnvalue
  res.sendFile(path.join(__dirname + '/trending.html'));

})

//Delete from LOCAL STORAGE OR JSON OR DATABASE AND RELOAD
//no resource called deleteComment so be careful
// app.delete('/comments/:id/deleteComment', (req, res) => {
//   console.log(req.query)
// })

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
