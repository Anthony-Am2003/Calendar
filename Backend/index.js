const server = require('./src/app')
const { conn } = require('./src/db')
const { PORT } = process.env || 3001;

conn.sync({force: true}).then(() =>{
    server.listen(PORT, ()=>{
        console.log(`Server raised in port ${PORT}`);
    })
})