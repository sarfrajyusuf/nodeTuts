const dbConnect=require('./config');

const updateData= async () => {
    let db = await dbConnect();
    let update=await db.updateOne(
        {name:"Sonia"},
        {  $set:{phone:653214578}
    }
    )
  console.log(update)
}
updateData();