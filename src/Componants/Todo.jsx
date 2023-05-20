import React, {useState} from 'react'
import todo from "../assets/to_do.jpg";
import "../Componants/to_Do.css"

 import{ AiOutlinePlus} from 'react-icons/Ai';
 import {AiFillDelete} from 'react-icons/Ai';


const Todo = () => {

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData){
      alert('Plz add items in list')
    }
      else {
         setItems([...items , inputData])
         setInputData('')
      }
  }

  
  // delete the items
 
  const deleteItem = (id) => {
    const updateditems = items.filter((elem , ind) => {
        return ind !== id;
    });

    setItems(updateditems);
}

     // remove all 
     const removeAll = () => {
      setItems([]);
 }

  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="todologo" />
                    <figcaption>Add Your List Here ✌</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="✍ Add Items..."
                       value={inputData} 
                       onChange={(e) => setInputData(e.target.value) }
                    />
                    
                        <span > <AiOutlinePlus onClick={addItem}/></span>

                                      
                   
                </div>

                <div className="showItems">
                    
                    {
                        items.map((elem , ind ) => {
                            return (
                                <div className="eachItem" key={ind}>
                                    <h3>{elem}</h3>
                                    <div className="todo-btn">
                                        <span className="delete" ><AiFillDelete  onClick={ () => deleteItem(ind)}/></span> 
                                    </div>
                              </div>
                            )
                        })

                    }
                   
                </div>
            
                {/* clear all button  */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                </div>
            </div>
      </div>  
    </>
)
}

  
export default Todo