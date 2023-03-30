import { useState, useContext, createContext } from "react"
import { data } from "../../../data";
const newProvider = createContext()
const newcontext = () => {
    const [neww, newuse] = useState(data);

    const removePersonid = (id) => {
        newuse((person) =>{
            return person.id !== id;
        })
    }
    return(
        <newProvider.Provider>
            <h1> Provider text</h1>
            <List></List>
        </newProvider.Provider>
    )
}
    const List = () => {
        const newProvider = useContext(newProvider);
        return(
            <>
            
            {
                newProvider.neww.map((person)=>{
                    <Component key ={person.id}{...person}></Component>
                })
            }
            
            </>)
        
    }
    const Component = () => {
        const {removePersonid} = useContext(newProvider);
        return (
            <div className='item'>
              <h4>{neww}</h4>
              <button onClick={() => removePerson(id)}>remove</button>
            </div>
          );

    }

export default newcontext;