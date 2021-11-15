import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MYOrders = () => {
    const {user}=useAuth();
    const [orders,setOrders]=useState([])
    const [isDeleted,setIsDeleted]=useState(null)
    const email=user.email+'';
    console.log(orders);
    
    useEffect(() =>{
fetch(`https://radiant-dawn-72784.herokuapp.com/allOrders`).then(res=>res.json()).then(result=>setOrders(result));



    },[isDeleted])
    const handleDelete=(id) => {
        fetch(`https://radiant-dawn-72784.herokuapp.com/deleteOrders/${id}`,{
 method: 'DELETE',
 headers: {'content-Type': 'application/json'}
 
 
 
        }).then(res=>res.json()).then(result=>{
           if(result.deletedCount){
               setIsDeleted(true)
 
           }
           else{
 setIsDeleted(false)
           }
        })
 
 console.log(id)
     }
    return (
        <div>
           <h2>Total Orders:{orders.length}</h2>
           <ui>

              {

                  orders.map(order =><li>Email: {order.email} <br/> Order ID: {order._id}<button onClick={()=>handleDelete(order._id)}>Delete</button></li>)
              }
           </ui>
            
        </div>
    );
};

export default MYOrders;