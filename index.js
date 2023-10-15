//import json-server in index.js file
const jsonServer=require('json-server')
//create a server for mediaplayer
const mediaPlayerServer=jsonServer.create()
//setup path/route from json file
const router=jsonServer.router("db.json")
//returns middleware used by json server
const middlewares=jsonServer.defaults()
//setup port for running server
const port=4000 || process.env.PORT
//use middlewares and router in server
mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)
//to listen server for resolving request from client
mediaPlayerServer.listen(port,()=>{
    console.log(`Media Player server started at port ${port},and waiting for client request!!!`);
})