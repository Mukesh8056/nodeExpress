
const express = require('express')

const app = express()

app.use(express())

const users =[
    {
        id:1,
        name:'Mukesh',
        Total_time:'24-hrs',
        CheckIn:'12pm',
        CheckOut:'12pm'

    },
    {
        id:2,
        name:'Shivani',
        Total_time:'24-hrs',
        CheckIn:'12pm',
        CheckOut:'12pm'
    },
    {
        id:3,
        name:'KALAIARASI',
        Total_time:'24-hrs',
        CheckIn:'12pm',
        CheckOut:'12pm'
    },
    {
        id:4,
        name:'VENKATESAN',
        Total_time:'24-hrs',
        CheckIn:'12pm',
        CheckOut:'12pm'
    },
    {
        id:5,
        name:'DIVYA',
        Total_time:'24-hrs',
        CheckIn:'12pm',
        CheckOut:'12pm'
    },
    {
        id:6,
        name:'KOWSALYA',
        Total_time:'24-hrs',
        CheckIn:'12pm',
        CheckOut:'12pm'
    },

]

const hotel =[

     {
        No_of_Rooms_available:-(users.length-10),
        No_of_Rooms_Booked:users.length,
        Amentites : 'Soap,Bed,Heater,Water',
        Price_for_day :"2000/-" 
     }

]

const hotelData = (req,res)=>{
    res.send(hotel)
}

const getUsers=(req,res)=>{
    res.send(users)
}

const getbyId = (req,res)=>{
    if(req.params.id >10 || 0){
        res.send(" ROOMS ARE NOT AVAILABLE")
    }else{
    const userId= users.find((user)=>user.id==req.params.id)
    res.send(userId)}
}

const addUser =  (req,res)=>{
     {
 const userName = req.body.name ;
 const userTime =req.body.time;
 const IN = req.body.checkIn;
 const out = req.body.checkOut;
 const newId  = users.length+1 

 const newUser = {
  id: newId ,
  name:userName,
  time:userTime,
  checkIn: IN,
  checkOut:out
 }
 users.push(newUser)
 res.send(newUser)

}}


const updateUser = (req,res)=>{
    
    if(req.params.id >10 || 0){
        res.send(" ROOMS ARE NOT AVAILABLE")
    }else{   
      const update= users.find((user)=>user.id==(req.params.id))
      
      update.id  = req.params.id;
      update.name = req.body.name ;
      update.time =req.body.time;
      update.checkIn = req.body.checkIn;
      update.checkOut= req.body.checkOut;
      res.send(update)
    }}

const userdelete = (req,res)=>{
         
    if(req.params.id >10 || 0){
        res.send(" ROOMS ARE NOT AVAILABLE")
    }else{   
      const userId= users.find((user)=>user.id==req.params.id)

      const index = users.indexOf(userId)
      users.splice(index,1)

      res.send(userId)

}}

const bodyparser = require('body-parser');

const port = process.env.PORT || 3003 ;

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:false}));

app.get ('/',hotelData)

app.get('/users',getUsers)

app.get('/users/:id',getbyId )

app.post('/users',addUser)

app.put('/users/:id',updateUser)

app.delete('/users/:id',userdelete)

app.listen(port,()=>{

    console.log(`server is currently running in ${port}`);
})



















