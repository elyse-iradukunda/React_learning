export default function Array(){
    const items = ["water","food","coca Cola","Proteins"];
    return(
       
        <ul>
            <li>{items.map((elm)=> <li>{elm}</li>)}</li>
        </ul>
    )
}