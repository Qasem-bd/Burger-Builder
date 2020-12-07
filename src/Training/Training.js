import classes from './Training.module.css';
import React from 'react'
import Aux from '../hoc/Auxillary'


let myInfo = {
    "userName" : "Qasem",
    "country" : "syrien",
    "skills": [ 
               ["HTML","pugjs","Haml"],
               ["CSS","Sass","Less"],
               ["js","Babel"]
   ],
   "skillsProgres": [
               {"HTML":"60%","pugjs":"50%","Haml" : "20%"},
               {"CSS": "70%", "Sass":"50%","Less":"40%"},
               {"js":"60%", "Babel": "30%"}          
   ],
    "addresses" : {
        "syrien" : "sham",
        "Turky" : "istanbul",
        "usa" : "california",
        "Germany": ["heidelberg", "karlsruhe", "hamborg"]
    },
    "Age": 29,
    "working":false,
    "identity":null
    
   }


const training = () => {

    let jsonObj = '{"userName":"Qasem","Age" : 29}'
    let jsObj = {userName : 'Qasem', Age : 29}
     console.log(jsonObj)
     console.log(typeof jsonObj)
     
     
     console.log(jsObj)
     console.log(typeof jsObj)
     let parseResult = JSON.parse(jsonObj);
     console.log('parse result',parseResult)
     let stingifyResult = JSON.stringify(jsObj)
     console.log('stringyfyResult :',stingifyResult)
     

    return (
        <Aux>
         <div className = {classes.Container}>
            
             
         </div>

        </Aux>)
        
}
export default training;