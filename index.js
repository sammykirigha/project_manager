const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/projects', require('./routes/projects'));

app.get("/", (req, res) => {
	res.send("App running...")
})


// Server Setup
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});