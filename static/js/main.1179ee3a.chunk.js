(this.webpackJsonpminipro=this.webpackJsonpminipro||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n.n(c),l=n(25),a=n.n(l),i=(n(33),n(34),n(35),n(8)),d=n(23);d.a.initializeApp({apiKey:"AIzaSyDTggILRijsOBzEC_h4YQS91xni5NUecTo",authDomain:"esp32-82eba.firebaseapp.com",databaseURL:"https://esp32-82eba-default-rtdb.firebaseio.com",projectId:"esp32-82eba",storageBucket:"esp32-82eba.appspot.com",messagingSenderId:"1089423220425",appId:"1:1089423220425:web:91e6cff09ae9ed6eecb718",measurementId:"G-57VSG2DPZB"});var r=d.a,o=n(26),j=n(27),b=new(function(){function e(){Object(o.a)(this,e),this.profile=""}return Object(j.a)(e,[{key:"setProfile",value:function(e){this.profile=e}},{key:"getProfile",value:function(){return this.profile}}]),e}()),h=n(2),u=r.database();var m=function(){var e=Object(i.f)();return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("div",{class:"header",children:Object(h.jsx)("h1",{children:"USER/ADMIN SIGN IN"})}),Object(h.jsxs)("div",{class:"signin",children:[Object(h.jsx)("label",{htmlFor:"username",children:Object(h.jsx)("div",{class:"tnew",children:Object(h.jsx)("b",{children:"USERNAME"})})}),Object(h.jsx)("input",{type:"text",className:"username-but",id:"username",required:!0}),Object(h.jsx)("label",{htmlFor:"password",children:Object(h.jsx)("div",{class:"tnew",children:Object(h.jsx)("b",{children:"PASSWORD"})})}),Object(h.jsx)("input",{type:"password",className:"password-but",id:"password",required:!0}),Object(h.jsx)("div",{class:"b1",children:Object(h.jsx)("button",{id:"signin",onClick:function(){var t=document.getElementById("username").value,n=document.getElementById("password").value,c="basicinfo",s=t.split("@");"user"===s[1]&&u.ref("user/").child(t).get().then((function(s){s.val()[c].username===t&&s.val()[c].password===n?(b.setProfile(s.val()),e.push("/measure")):s.val()[c].password!==n?alert("wrong password,please check again"):alert("your account doesn't exist")})),"admin"===s[1]&&u.ref("admin/").child(t).get().then((function(s){s.val()[c].username===t&&s.val()[c].password===n?(b.setProfile(s.val()),e.push("/critical")):s.val()[c].password!==n?alert("wrong password,please check again"):alert("your account doesn't exist")}))},children:Object(h.jsx)("b",{children:"SIGN IN"})})}),Object(h.jsx)("div",{class:"b2",children:Object(h.jsx)("button",{id:"signup",onClick:function(){alert("Admin:username@admin,User:username@user"),e.push("/signup")},children:Object(h.jsx)("b",{children:"SIGN UP"})})}),Object(h.jsx)("div",{class:"b3",children:Object(h.jsx)("button",{onClick:function(){e.push("/book")},children:Object(h.jsx)("b",{children:"BOOKED"})})})]})]})},O=(n(48),r.database());var x=function(){var e=Object(i.f)();return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{className:"signup",children:[Object(h.jsx)("div",{class:"head",children:Object(h.jsx)("h1",{children:"SIGN UP"})}),Object(h.jsxs)("div",{class:!0,name:"main",children:[Object(h.jsx)("div",{class:"usernamel",children:Object(h.jsx)("label",{htmlFor:"username",children:Object(h.jsx)("div",{class:"t20",children:Object(h.jsx)("b",{children:"USERNAME"})})})}),Object(h.jsx)("input",{type:"text",placeholder:"username@admin/user",className:"username",id:"username",required:!0}),Object(h.jsx)("div",{class:"passwordl",children:Object(h.jsx)("label",{htmlFor:"password",children:Object(h.jsx)("div",{class:"t20",children:Object(h.jsx)("b",{children:"PASSWORD"})})})}),Object(h.jsx)("input",{type:"password",className:"password",id:"password",required:!0}),Object(h.jsx)("div",{class:"nameusl",children:Object(h.jsx)("label",{htmlFor:"nameus",children:Object(h.jsx)("div",{class:"t20",children:Object(h.jsx)("b",{children:"FULL NAME"})})})}),Object(h.jsx)("input",{id:"nameus",className:"nameus",required:!0}),Object(h.jsx)("div",{class:"emaill",children:Object(h.jsx)("label",{htmlFor:"email",children:Object(h.jsx)("div",{class:"t20",children:Object(h.jsx)("b",{children:"EMAIL"})})})}),Object(h.jsx)("input",{type:"email",className:"email",id:"email",required:!0}),Object(h.jsx)("div",{class:"dobl",children:Object(h.jsx)("label",{htmlFor:"dob",children:Object(h.jsx)("div",{class:"t20",children:Object(h.jsx)("b",{children:"DATE OF BIRTH"})})})}),Object(h.jsx)("input",{type:"date",className:"dob",id:"dob",required:!0}),Object(h.jsx)("div",{class:"addressl",children:Object(h.jsx)("label",{htmlFor:"address",children:Object(h.jsx)("div",{class:"t20",children:Object(h.jsx)("b",{children:"ADDRESS"})})})}),Object(h.jsx)("input",{type:"text",className:"address",id:"address"}),Object(h.jsx)("div",{class:"contnml",children:Object(h.jsx)("label",{htmlFor:"contnm",children:Object(h.jsx)("div",{class:"t20",children:Object(h.jsx)("b",{children:"CONTACT NO"})})})}),Object(h.jsx)("input",{type:"number",id:"contnm",className:"contnm"}),Object(h.jsx)("div",{class:"b20",children:Object(h.jsx)("button",{onClick:function(){var t="basicinfo",n=document.getElementById("username").value,c=document.getElementById("password").value,s=document.getElementById("email").value,l=document.getElementById("dob").value,a=document.getElementById("address").value,i=document.getElementById("contnm").value,d=document.getElementById("nameus").value,r=n.split("@");""===n||""===c||""===s||""===l||""===a||""===i||""===d?alert("Please Fill up all the details"):("user"===r[1]&&O.ref("user/").child(n).get().then((function(r){try{r.val()[t].username===n&&(alert("username already exist"),console.log(r),document.getElementById("username").value="",document.getElementById("password").value="",document.getElementById("email").value="",document.getElementById("dob").value="",document.getElementById("address").value="",document.getElementById("contnm").value="",document.getElementById("nameus").value="",window.location.reload())}catch(j){var o={basicinfo:{name:d,username:n,password:c,email:s,DateofBirth:l,ContactNumber:i,Address:a}};O.ref("user/").child(n).child(t).set(o.basicinfo).then((function(){alert("Succesfully Registered")})).catch((function(e){alert("trNamen")})),b.setProfile(o),e.push("/measure")}})).catch((function(e){})),"admin"===r[1]&&O.ref("admin/").child(n).get().then((function(r){try{r.val()[t].username===n&&(alert("username already exist"),console.log(r),document.getElementById("username").value="",document.getElementById("password").value="",document.getElementById("email").value="",document.getElementById("dob").value="",document.getElementById("address").value="",document.getElementById("contnm").value="",document.getElementById("nameus").value="",window.location.reload())}catch(j){var o={basicinfo:{name:d,username:n,password:c,email:s,DateofBirth:l,ContactNumber:i,Address:a}};O.ref("admin/").child(n).child(t).set(o.basicinfo).then((function(){alert("Succesfully Registered")})).catch((function(e){alert("error",e)})),b.setProfile(o),e.push("/critical")}})).catch((function(e){})))},children:Object(h.jsx)("b",{children:"SIGN UP"})})}),Object(h.jsxs)("div",{class:"bhome",children:[" ",Object(h.jsx)("button",{onClick:function(){e.push("/")},children:Object(h.jsx)("div",{class:"t10",children:Object(h.jsx)("b",{children:"HOME"})})})]})]})]})})};n(49);var v=function(){var e=r.database(),t=b.getProfile();function n(){document.getElementById("save").style.display="block"}var c=Object(i.f)(),l="basicinfo";return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("div",{class:"head200",children:Object(h.jsx)("h1",{children:"USER PROFILE"})}),Object(h.jsx)("button",{id:"logout3",onClick:function(){c.push("/")},children:Object(h.jsx)("b",{children:"LOGOUT"})}),Object(h.jsx)("button",{id:"measure",onClick:function(){c.push("/measure")},children:Object(h.jsx)("b",{children:"MEASURE"})}),Object(h.jsxs)("div",{id:"profileuser",children:[Object(h.jsxs)("div",{class:"username-one",children:[" ",Object(h.jsx)("label",{htmlFor:"username",children:Object(h.jsx)("b",{children:"USERNAME"})})]}),Object(h.jsx)("div",{class:"username-two",children:t[l].username}),Object(h.jsxs)("div",{class:"name-one",children:["  ",Object(h.jsx)("label",{htmlFor:"name",children:Object(h.jsx)("b",{children:"NAME"})})]}),Object(h.jsx)("div",{class:"name-two",children:t[l].name}),Object(h.jsxs)("div",{class:"email-one",children:[" ",Object(h.jsx)("label",{htmlFor:"email",children:Object(h.jsx)("b",{children:"EMAIL"})})]}),Object(h.jsx)("div",{class:"email-two",children:t[l].email}),Object(h.jsxs)("div",{class:"dob-one",children:["  ",Object(h.jsx)("label",{htmlFor:"dob",children:Object(h.jsx)("b",{children:"DOB"})})]}),Object(h.jsx)("div",{class:"dob-two",children:t[l].DateofBirth}),Object(h.jsxs)("div",{class:"address-one",children:["  ",Object(h.jsx)("label",{htmlFor:"address",children:Object(h.jsx)("b",{children:"ADDRESS"})})]}),Object(h.jsx)("div",{class:"address-two",children:t[l].Address}),Object(h.jsx)("div",{class:"contactnm-one",children:Object(h.jsx)("label",{htmlFor:"contactnm",children:Object(h.jsx)("b",{children:"CONTACT NO"})})}),Object(h.jsx)("div",{class:"contactnm-two",children:t[l].ContactNumber}),Object(h.jsx)("button",{id:"change2",onClick:function(){document.getElementById("passchange").style.display="block"},children:Object(h.jsx)("b",{children:"CHANGE PASSWORD"})}),Object(h.jsxs)("div",{id:"passchange",style:{display:"none"},children:[Object(h.jsxs)("div",{class:"c1",children:[Object(h.jsx)("label",{htmlFor:"password-two",children:Object(h.jsx)("div",{class:"t100",children:Object(h.jsx)("b",{children:"PREVIOUS PASSWORD   "})})}),Object(h.jsx)("input",{id:"password-two",className:"password-two",onChange:n})]}),Object(h.jsxs)("div",{class:"c2",children:[Object(h.jsx)("label",{htmlFor:"nwpassword-two",children:Object(h.jsx)("div",{class:"t100",children:Object(h.jsx)("b",{children:"NEW PASSWORD   "})})}),Object(h.jsx)("input",{id:"nwpassword-two",className:"nwpassword-two",onChange:n})]}),Object(h.jsx)("div",{class:"c3",children:Object(h.jsx)("button",{id:"save",style:{display:"none"},onClick:function(){var t=document.getElementById("password-two").value,n=document.getElementById("nwpassword-two").value,c="basicinfo";if(b.getProfile()[c].password===t){var s=b.getProfile();e.ref("user/").child(s[c].username).child(c).update({password:n}),alert("password updated"),document.getElementById("passchange").style.display="none"}else alert("you have pressed wrong password")},children:Object(h.jsx)("b",{children:"SAVE"})})})]})]})]})};n(50);var p=function(){var e=r.database(),t=b.getProfile(),n="basicinfo";function c(){document.getElementById("save").style.display="block"}var l=Object(i.f)();return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("div",{class:"head100",children:Object(h.jsx)("h1",{children:"ADMIN PROFILE"})}),Object(h.jsx)("button",{id:"logout2",onClick:function(){l.push("/")},children:Object(h.jsx)("b",{children:"LOGOUT"})}),Object(h.jsx)("button",{id:"critical",onClick:function(){l.push("/critical")},children:Object(h.jsx)("b",{children:"CRITICAL"})}),Object(h.jsxs)("div",{id:"profileadmin",children:[Object(h.jsx)("div",{class:"username-one",children:Object(h.jsx)("label",{htmlFor:"username",children:Object(h.jsx)("b",{children:"USERNAME"})})}),Object(h.jsx)("div",{class:"username-two",children:t[n].username}),Object(h.jsx)("div",{class:"name-one",children:Object(h.jsx)("label",{htmlFor:"name",children:Object(h.jsx)("b",{children:"NAME"})})}),Object(h.jsx)("div",{class:"name-two",children:t[n].name}),Object(h.jsx)("div",{class:"email-one",children:Object(h.jsx)("label",{htmlFor:"email",children:Object(h.jsx)("b",{children:"EMAIL"})})}),Object(h.jsx)("div",{class:"email-two",children:t[n].email}),Object(h.jsx)("div",{class:"dob-one",children:Object(h.jsx)("label",{htmlFor:"dob",children:Object(h.jsx)("b",{children:"DOB"})})}),Object(h.jsx)("div",{class:"dob-two",children:t[n].DateofBirth}),Object(h.jsx)("div",{class:"address-one",children:Object(h.jsx)("label",{htmlFor:"address",children:Object(h.jsx)("b",{children:"ADDRESS"})})}),Object(h.jsx)("div",{class:"address-two",children:t[n].Address}),Object(h.jsx)("div",{class:"contactnm-one",children:Object(h.jsx)("label",{htmlFor:"contactnm",children:Object(h.jsx)("b",{children:"CONTACT NO"})})}),Object(h.jsx)("div",{class:"contactnm-two",children:t[n].ContactNumber}),Object(h.jsx)("button",{id:"change",onClick:function(){document.getElementById("passchange").style.display="block"},children:Object(h.jsx)("b",{children:"CHANGE PASSWORD"})}),Object(h.jsxs)("div",{id:"passchange",style:{display:"none"},children:[Object(h.jsxs)("div",{class:"c1",children:[Object(h.jsx)("label",{htmlFor:"password-two",children:Object(h.jsx)("div",{class:"t100",children:Object(h.jsx)("b",{children:"PREVIOUS PASSWORD   "})})}),Object(h.jsx)("input",{id:"password-two",className:"password-two",onChange:c})]}),Object(h.jsxs)("div",{class:"c2",children:[Object(h.jsx)("label",{htmlFor:"nwpassword-two",children:Object(h.jsx)("div",{class:"t100",children:Object(h.jsx)("b",{children:"NEW PASSWORD   "})})}),Object(h.jsx)("input",{id:"nwpassword-two",className:"nwpassword-two",onChange:c})]}),Object(h.jsx)("div",{class:"c3",children:Object(h.jsx)("button",{id:"save",style:{display:"none"},onClick:function(){var c=document.getElementById("password-two").value,s=document.getElementById("nwpassword-two").value;t[n].password===c?(console.log(t[n].password),console.log(t[n].username),e.ref("admin/").child(t[n].username).child(n).update({password:s}).then((function(e){alert("password updated"),document.getElementById("passchange").style.display="none"}))):alert("you have pressed wrong password"),document.getElementById("passchange").style.display="none"},children:Object(h.jsx)("b",{children:"SAVE"})})})]})]})]})};n(51);var f=function(){var e=Object(i.f)(),t=b.getProfile();return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("div",{class:"header3",children:Object(h.jsx)("h1",{children:"YOU HAVE SUCCESSFULLY SIGNED IN"})}),Object(h.jsx)("button",{id:"logout",onClick:function(){e.push("/")},children:Object(h.jsx)("div",{class:"t3",children:Object(h.jsx)("b",{children:"LOGOUT"})})}),Object(h.jsx)("button",{id:"profile",onClick:function(){e.push("/profileuser")},children:Object(h.jsx)("div",{class:"t3",children:Object(h.jsx)("b",{children:"PROFILE"})})}),Object(h.jsx)("div",{class:"b61",children:Object(h.jsx)("button",{onClick:function(){var e="";Object.keys(t).map((function(e){return void 0===t[e].username?'<div class="newtwo">\n\n      <table id = "table2">\n                \n        <tr>\n        <th><label htmlFor="spotwo">SPO2 - </label></th>\n        <th><label htmlFor="heartrate">HEART RATE - </label> </th>\n        <th><label htmlFor="time">TIME - </label> </th>\n        <th><label htmlFor="time">DATE - </label> </th>\n        </tr>\n\n      <tr>\n      <td><div> '.concat(t[e].spotwo,"</div></td>\n      <td><div>").concat(t[e].heartrate,"</div></td>\n      <td><div>").concat(t[e].time,"</div></td>\n      <td><div>").concat(t[e].date,"</div></td>\n      </tr>\n      </br>\n      </table>\n      </div>"):""})).forEach((function(t){e+=t})),document.getElementById("measure").innerHTML=e},children:Object(h.jsx)("div",{class:"t3",children:Object(h.jsx)("b",{children:"MEASURE"})})})}),Object(h.jsx)("div",{id:"measure"})]})},g=(n(52),r.database()),E=r.database();var w=function(){var e=Object(i.f)();function t(e){var t=function(){var e=new Date,t=e.getDate().toString(),n=(e.getMonth()+1).toString();n<10&&(n="0"+n.toString());var c=e.getFullYear().toString(),s=e.getHours().toString(),l=e.getMinutes();l<10&&(l="0"+l.toString());var a=e.getSeconds();return a<10&&(a="0"+a.toString()),t+n+c+s+l+a}();g.ref("user/").child(e.username).get().then((function(n){var c=b.getProfile().basicinfo.username,s=b.getProfile().basicinfo.ContactNumber;g.ref("admin/").child(c).child(t).set({Bookedby:c,ContactNumber:s,date:t[0]+""+t[1]+"/"+t[2]+t[3]+"/"+t[4]+t[5]+t[6]+t[7],time:t[8]+""+t[9]+":"+t[10]+t[11]+":"+t[12]+t[13],patientusrnm:n.val().basicinfo.username,patientaddr:n.val().basicinfo.Address,patientcontnm:n.val().basicinfo.ContactNumber,spotwo:e.spotwo,heartrate:e.heartrate}).then((function(){alert("Booked Successfully"),g.ref("critical/"+e.username).remove()}))}))}return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("div",{class:"header8",children:Object(h.jsx)("h1",{children:"YOU HAVE SUCCESSFULLY SIGNED IN"})}),Object(h.jsx)("button",{id:"logout",onClick:function(){e.push("/")},children:Object(h.jsx)("div",{class:"t1",children:Object(h.jsx)("b",{children:"LOGOUT"})})}),Object(h.jsx)("button",{id:"profile",onClick:function(){e.push("/profileadmin")},children:Object(h.jsx)("div",{class:"t1",children:Object(h.jsx)("b",{children:"PROFILE"})})}),Object(h.jsx)("div",{class:"b6",children:Object(h.jsx)("button",{onClick:function(){var e=[];E.ref("user/").get().then((function(t){Object.keys(t.val()).forEach((function(n){e.push(t.val()[n].basicinfo)}))})),g.ref("critical/").get().then((function(n){var c=n.val(),s="";Object.keys(c).map((function(t){return'<div class="newthree">\n                <table id="table1">\n                \n                  <tr>\n                  <th><label htmlFor="usrnm">USERNAME </label></th>\n                  <th><label htmlFor="addr">ADDRESS </label></th>\n                  <th><label htmlFor="contactnm">CONTACT NO </label></th>\n                  <th><label htmlFor="dob">DATE OF BIRTH </label></th>\n                  <th><label htmlFor="spotwo">SPO2 </label></th>\n                  <th><label htmlFor="heartrate">HEARTRATE </label>\n                  <th><label htmlFor="time">TIME </label></th>\n                  <th><label htmlFor="date">DATE </label></th>\n                  </tr>\n\n\n                  <tr>\n                  <td><div id="usrnm">'.concat(c[t].username,'</div></td>\n                  <span class="DND">')+e.map((function(e){return c[t].username===e.username?'\n                    <td><div id="addr">'.concat(e.Address,'</div></td>\n                    <td><div id="contactnm">').concat(e.ContactNumber,'</div></td>\n                    <td><div id="dob">').concat(e.DateofBirth,'</div></td>\n                    </span>\n                    <span class="DND">'):""}))+'</span>\n                <td><div id="spotwo">'.concat(c[t].spotwo,'</div></td>\n                <td><div id="heartrate">').concat(c[t].heartrate,'</div></td>\n                <td> <div id="time">').concat(c[t].time,'</div></td>\n                <td><div id="date">').concat(c[t].date,'</div></td>\n                </tr>\n                <div class=butt><button id="').concat(c[t].username,'"><div class = "t6">Book</div></button></div>\n                \n                </table>\n                  </div>')})).forEach((function(e){s+=e})),document.getElementById("cricpat").innerHTML=s,Object.keys(c).forEach((function(e){document.getElementById(c[e].username).addEventListener("click",(function(){t(c[e])}))}))}))},children:Object(h.jsx)("div",{class:"t1",children:Object(h.jsx)("b",{children:"CRITICAL"})})})}),Object(h.jsx)("div",{id:"cricpat"})]})},y=(n(53),r.database());var I=function(){var e=Object(i.f)();return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("div",{class:"header7",children:Object(h.jsx)("h1",{children:"BOOKED DATABASE"})}),Object(h.jsxs)("div",{class:"bz",children:[" ",Object(h.jsx)("button",{onClick:function(){e.push("/")},children:Object(h.jsx)("div",{class:"t1",children:Object(h.jsx)("b",{children:"HOME"})})})]}),Object(h.jsx)("div",{class:"by",children:Object(h.jsx)("button",{onClick:function(){y.ref("admin/").get().then((function(e){var t=[],n=[];Object.keys(e.val()).forEach((function(n){t.push(e.val()[n])})),t.forEach((function(e){Object.keys(e).forEach((function(t){n.push(e[t])}))}));var c='\n      <table id=table3>\n      <tr> \n             <th><label htmlFor="usrnm">ADMINISTRATOR</label></th>\n             <th><label htmlFor="usrnm">CONTACT</label></th>\n             <th><label htmlFor="spotwo">SPO2</label></th>\n             <th><label htmlFor="heartrate">HEARTRATE</label></th>\n             <th><label htmlFor="date">TIME</label></th>\n             <th><label htmlFor="time">DATE</label></th>\n             </tr>\n             \n             </table>';n.map((function(e){return void 0===e.username?'<div class="one">\n\n            <div class="twoone">\n\n            <table>\n\n             \n\n             <tr>\n             <td> <div>'.concat(e.Bookedby,"</div></td>\n             <td> <div>").concat(e.ContactNumber,"</div></td>\n             <td><div>").concat(e.spotwo,"</div></td>\n             <td><div>").concat(e.heartrate,"</div></td>\n             <td><div>").concat(e.time,"</div></td>\n             <td><div>").concat(e.date,"</div></td>     \n            </tr>\n            </br>\n\n            <table>\n\n            </div>\n\n              </div>"):""})).forEach((function(e){c+=e})),document.getElementById("bookpat").innerHTML=c}))},children:Object(h.jsx)("div",{class:"t1",children:Object(h.jsx)("b",{children:"CLICK TO CHECK"})})})}),Object(h.jsx)("div",{id:"bookpat"})]})},S=n(14);var F=function(){return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",children:Object(h.jsx)(m,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/signup",children:Object(h.jsx)(x,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/profileuser",children:Object(h.jsx)(v,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/profileadmin",children:Object(h.jsx)(p,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/measure",children:Object(h.jsx)(f,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/critical",children:Object(h.jsx)(w,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/book",children:Object(h.jsx)(I,{})})]})})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),l(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),A()}},[[54,1,2]]]);
//# sourceMappingURL=main.1179ee3a.chunk.js.map