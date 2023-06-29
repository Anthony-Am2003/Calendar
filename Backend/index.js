const server = require('./src/app')
const { conn } = require('./src/db')
const { PORT } = process.env || 3001;

conn.sync({force: false}).then(() =>{
    server.listen(3001, ()=>{
        console.log(`Server raised in port ${3001}`);
    })
})