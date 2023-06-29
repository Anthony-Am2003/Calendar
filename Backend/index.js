const server = require('./src/app')
const { conn } = require('./src/db')
const { PGPORT } = process.env || 3001;

conn.sync({force: false}).then(() =>{
    server.listen(PGPORT, ()=>{
        console.log(`Server raised in PORT ${PGPORT}`);
    })
})