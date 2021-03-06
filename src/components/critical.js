import React from 'react';
import './critical.css';
import { useHistory } from "react-router-dom";
import Mainchecker from "./mainchecker.js";
import firebase from './fire.js';
var db=firebase.database();
var cb=firebase.database();
 function Critical()
 {
  
  let history=useHistory();
  function profile()
  {
    
    history.push('/profileadmin');
  }
  function logout()
  {
      history.push('/');

  }
  function fetchTime() {
    const time = new Date();
    const day = time.getDate().toString();
    let month = (time.getMonth() + 1).toString();
    if(month < 10) month="0"+ month.toString();
    const year = time.getFullYear().toString();
    const hours = time.getHours().toString();
    let mint = time.getMinutes();
    if (mint < 10) mint = "0" + mint.toString();
    let sec = time.getSeconds();
    if (sec < 10) sec = "0" + sec.toString();
    return day + month + year + hours + mint + sec;
  }
  function Book(critical)
  {
        var book_time=fetchTime();
        db.ref("user/").child(critical["username"]).get().then((snapshot)=>
        {
         
         var  nm=Mainchecker.getProfile()["basicinfo"]["username"]
         var contactnm=Mainchecker.getProfile()["basicinfo"]["ContactNumber"]
        db.ref("admin/").child(nm).child(book_time).set({
            Bookedby:nm,
            ContactNumber:contactnm,
            date:book_time[0]+""+book_time[1]+"/"+book_time[2]+""+book_time[3]+"/"+book_time[4]+""+book_time[5]+""+book_time[6]+""+book_time[7],
            time:book_time[8]+""+book_time[9]+":"+book_time[10]+""+book_time[11]+":"+book_time[12]+""+book_time[13]  ,
            patientusrnm :snapshot.val()["basicinfo"]["username"],
            patientaddr: snapshot.val()["basicinfo"]["Address"],
            patientcontnm: snapshot.val()["basicinfo"]["ContactNumber"],
            spotwo:critical["spotwo"],
            heartrate:critical["heartrate"]
           
        }).then(()=>{
          alert("Booked Successfully");
          db.ref("critical/"+critical["username"]).remove();
        })
      })
  }
  function onDemand()
  {
    let basicInfo=[]
    cb.ref("user/").get().then((snap)=>{
      Object.keys(snap.val()).forEach(info=>{
        basicInfo.push(snap.val()[info]["basicinfo"])
      })
    })
      db.ref("critical/").get().then((snapshot)=>
      {
        let val=snapshot.val();
        let content=``;
        Object.keys(val).map((data)=>
        (
          
           
            `<div class="newthree">
                <table id="table1">
                
                  <tr>
                  <th><label htmlFor="usrnm">USERNAME </label></th>
                  <th><label htmlFor="addr">ADDRESS </label></th>
                  <th><label htmlFor="contactnm">CONTACT NO </label></th>
                  <th><label htmlFor="dob">DATE OF BIRTH </label></th>
                  <th><label htmlFor="spotwo">SPO2 </label></th>
                  <th><label htmlFor="heartrate">HEARTRATE </label>
                  <th><label htmlFor="time">TIME </label></th>
                  <th><label htmlFor="date">DATE </label></th>
                  </tr>


                  <tr>
                  <td><div id="usrnm">${val[data]["username"]}</div></td>
                  <span class="DND">`+
                  
                  basicInfo.map((index)=>(
                   
                   (val[data]["username"]===index["username"])?
                    `
                    <td><div id="addr">${index["Address"]}</div></td>
                    <td><div id="contactnm">${index["ContactNumber"]}</div></td>
                    <td><div id="dob">${index["DateofBirth"]}</div></td>
                    </span>
                    <span class="DND">`:``
                  
                  ))+
                  
                  `</span>
                <td><div id="spotwo">${val[data]["spotwo"]}</div></td>
                <td><div id="heartrate">${val[data]["heartrate"]}</div></td>
                <td> <div id="time">${val[data]["time"]}</div></td>
                <td><div id="date">${val[data]["date"]}</div></td>
                </tr>
                <div class=butt><button id="${val[data]["username"]}"><div class = "t6">Book</div></button></div>
                
                </table>
                  </div>`
          
            
          )).forEach(element=>{
            content += element
          })

      document.getElementById("cricpat").innerHTML=content;

    
    
      Object.keys(val).forEach((data)=>
      {
        
        
        document.getElementById(val[data]["username"]).addEventListener("click",function(){
          
          Book(val[data])
        })
      })
    })

      
        
      
    
}
  
  
  return(
      <React.Fragment>

<div class="header8">
            <h1>YOU HAVE SUCCESSFULLY SIGNED IN</h1>
            </div> 
          <button id="logout" onClick={logout}><div class = "t1"><b>LOGOUT</b></div></button>
          <button id="profile" onClick={profile}><div class = "t1"><b>PROFILE</b></div></button>
            <div class="b6"><button onClick={onDemand}><div class = "t1"><b>CRITICAL</b></div></button></div>
          <div id="cricpat">
          
          </div>
      
      
         
      </React.Fragment>
  )

}
export default Critical;



 

