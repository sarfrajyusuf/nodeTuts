const dbConnect= require('./config');

const deleteData = async () => {
    const data = await dbConnect();
    const result=await data.deleteOne({name:"Sonia"})

    console.log(result)
    if(result.deletedCount==1){
        console.log("Data deleted")
        
    }
    else{
        console.log("No data Found")

    }
}
deleteData();