//PresidentChild is responsible for displaying the information

//PresidentParent is responsible for using the map feature and have it call the child


//Bronze: See if you can display all the presidents first and last name byin usind the .map method

//Silver: Create a filtered Array so tat the child will only display the presidents that are alive (.map and filter used)

// //Gold: Display all presidents that have dies and display the age that they did die.
// import PresidentChild from "./PresidentChild"
// import { presidentsArray } from "./presidents.constant"

// function StillAlive(e){
//     if (e.passed === undefined) 
//     {return e}

// }

// function DeathNote(d){

//    if (d.passed !== undefined){
//     let age = d.year - d.passed

//     d.year = age
    
//     console.log(age);
//     return d
   
// }
// }

// function PresidentParent (){
    

//     return <div>
//         {/* {presidentsArray.map(president => <PresidentChild pres= {president}/>)} */}
//         {/* {presidentsArray.filter(StillAlive).map(president => <PresidentChild pres= {president}/>)} */}
//         {presidentsArray.filter(DeathNote).map(president => <PresidentChild pres={president} age={age}/>)}
//     </div>
    
// }

// export default PresidentParent