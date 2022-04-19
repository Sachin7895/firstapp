import React, { useState, useEffect } from 'react';
import "./style.css";

const getLocalData =()=>{

    const  lists=localStorage.getItem("mytodolist");
    if(lists){
        return JSON.parse(lists)
    }
    else {
        return []
    }
}

const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());

    const addItem = () => {
        if (!inputdata) {

            alert("pls fill the data")
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }

    }

    const deleteItem = (index) => {
        const updatedItems = items.filter((curlElem) => {
            return curlElem.id !== index
        });

        setItems(updatedItems)
    }

    const removeAll = () => {
        setItems([])
    }

    useEffect(() => {
             localStorage.setItem("mytodolist",JSON.stringify(items))
    },[items]);
    

    return (
        <div className='main-div' >
            <div className='child-div'>
                <figure>
                    <img src="./images/todo.svg" alt="todologo" />
                    <figcaption>Add Your List Here 👋</figcaption>
                </figure>
                <div className='addItems'>
                    <input
                        type="text"
                        placeholder="✍ Add Item"
                        className='form-control'
                        value={inputdata}
                        onChange={(event) => setInputData(event.target.value)}

                    />
                    <i className="fa solid fa-plus add-btn" onClick={addItem} ></i>
                </div>

                {/* {Show Our Item} */}



                <div className='showItems'>

                    {items.map((curlElem) => {
                        return (
                            <div className='eachItem' key={curlElem.id}>
                                <h3>
                                    {curlElem.name}
                                </h3>
                                <div className='todo-btn'>
                                    <i className="far solid fa-edit add-btn" ></i>
                                    <i className="far solid fa-trash-alt add-btn"
                                        onClick={() => deleteItem(curlElem.id)}
                                    ></i>
                                </div>
                            </div>
                        )


                    })}

                </div>

                {/* {removeallButton} */}
                <div className='showItems'>
                    <button
                        className='btn effect04'
                        data-sm-link-text="Remove All"
                        onclick={removeAll}
                    >

                        < span>
                            CHECK LIST
                        </span>

                    </button>
                </div>

            </div>

        </div>
    )
}

export default Todo; 