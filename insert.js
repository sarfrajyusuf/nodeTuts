const dbConnect=require('./config');

const insertData= async () => {
    const db= await dbConnect();
    const result= await db.insertMany([
        {name:"Romio",email:"romio@hotmail.com",phone:628923156},
        {name:"Rumi",email:"rumi@gmail.com",phone:987432156},
        {name:"Avni",email:"rumi@gmail.com",phone:784589632}
    ]
        )
if(result.acknowledged){
    console.log('Data Inserted')
}
}
insertData();