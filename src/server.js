const app = require('./index')
const connect = require('./configs/db')
app.listen(3000,async ()=>{
    await connect()
})