function ChildComponent(props){
//Final OutPut: Abe Lincoln had a total vote count of 139033
const {name, count} = props.votes


    return <div>{name} had a total vote count of {count}. </div>
    
}

export default ChildComponent;