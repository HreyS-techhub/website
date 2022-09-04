import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAs74XFqZvTHi15JilpRdGJSjGSJXr83Mo",
  authDomain: "website-48301.firebaseapp.com",
  databaseURL: "https://website-48301-default-rtdb.firebaseio.com",
  projectId: "website-48301",
  storageBucket: "website-48301.appspot.com",
  messagingSenderId: "639689288931",
  appId: "1:639689288931:web:fea6b7622f4d1630f969d6",
  measurementId: "G-TF6RKQGRJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase,ref,set,get,child,update,remove} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
const db=getDatabase();

export function getLastKeyAndInsertData(checkOption){
    let path;
    switch(checkOption){
        case "Course":
            path="NoOfCourseRegistrations";
            break;
        case "Internship":
            path="NoOfInternshipRegistrations";
            break;
        default:
            path="NoOfQueries";
    }
    get(child(ref(db),'Registrations/'+path))
    .then((data)=>{
        if(data.exists()){
            let key=data.val();
            const name=$('#contactName').val();
            const email=$('#contactEmail').val();
            const mobile=$('#contactNumber').val();
            const message=$('#contactMessage').val();
            const registeredCourse=$('#dynamicDropDown').val();
            set(ref(db,checkOption+'/'+data.val()),{
                Name: name,
                Email: email,
                Mobile: mobile,
                Course: registeredCourse,
                Message: message
            })
            .then(()=>{
                updateKey(key,path);
            })
            .then(()=>{
                $("#contactForm").submit();
                window.location.href = 'success.html';
            })
            .catch((error)=>{
                alert("An internal error occured.Check your connection and try again!\nError Details:"+error);
            });
        }
    })
    .catch((error)=>{
        alert("An internal error occured.Check your connection and try again!\nError Details:"+error);
        return null;
    });
}

function updateKey(key,path){
    const updates = {};
    updates['Registrations/'+path] = key+1;
    update(ref(db), updates);
}