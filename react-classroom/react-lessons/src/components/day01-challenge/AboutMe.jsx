function AboutMe() {
const style = {
    header: {color:"blue"},
    listItems: {listStyle: "none"},
}

    return(
        <div>
        <h1 style= {style.header}>Rodney or Raheem</h1>
        <p>I grew up in Indianapolis IN</p>
        <ul>
            <li style ={style.listItems}>Mississippi</li>
            <li style ={style.listItems}>South Carolina</li>
            <li style ={style.listItems}>Augusta Ga</li>
        </ul>
        
        </div>
    )
    
    
    }
    
    export default AboutMe