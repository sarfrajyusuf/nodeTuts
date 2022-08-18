const { defaultConfiguration } = require('express/lib/application');
const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const client=new MongoClient(url);
const database='e-comm';

async function getData(){
let connect= await client.connect();
let db=connect.db(database);
return db.collection('products');

}
module.exports= getData;