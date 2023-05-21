import './home.styles.scss'
import { useState, useEffect } from 'react';
import '../../App.css'
import { collection, addDoc, getDocs, serverTimestamp, deleteDoc, doc } from "firebase/firestore/lite";
import {db} from '../../utils/firebase';
import { Fragment } from 'react';



const Home = () => {    
    
    const [todo, setTodo] = useState(""); // todo = input value
    const [todoList, setTodoList] = useState([]); // todoList = array of todos
    const [stateChanged, setStateChanged] = useState(false);
    
    const addTodo = async (e) => {        
        e.preventDefault()       
        try {         
            const docRef = await addDoc(collection(db, "todos"), {  // addDoc = add document to collection          
                name: todo,
                created_at: serverTimestamp()                                
            });

            console.log("Document written with ID: ", docRef);
            
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setStateChanged(!stateChanged);
    }

    useEffect(() => {
        async function getCities(db) {
          const toDoCol = collection(db, 'todos');
          const todoSnapshot = await getDocs(toDoCol);          
          const getDocList = todoSnapshot.docs
            .sort((a, b) => b.data().created_at - a.data().created_at)  
            .map((doc) => ({...doc.data(), id:doc.id}));
          setTodoList(getDocList);
        } 
        getCities(db);
      }, [stateChanged]);

      
    
    
    const removeTodo = async (e) => {   
        //e.preventDefault()
        try {   
            await deleteDoc(doc(db, "todos", e));
            console.log("Document successfully deleted!");
        } catch (e) {
            console.error("Error removing document: ", e);
        }
        setStateChanged(!stateChanged);
    }

    

    
    
    
    return (
        <Fragment>
           
            <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Zapisnicek
                </h1>

                <div>

                    <div>
                        <input
                            type="text"
                            placeholder="What do you have to do today?"
                            onChange={(e)=>setTodo(e.target.value)}
                        />
                    </div>

                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={addTodo}
                        >
                            Pridat
                        </button>
                    </div>

                </div>

                <div className="todo-content">
                    ...
                </div>
            </div>
        </section>
        <div>
        
        <div>
        {todoList.map((element) => {
            return (
            <ul key={element.id}>
                <li>{`${element.created_at.toDate().getDate()}.${element.created_at.toDate().getMonth() + 1}.${element.created_at.toDate().getFullYear()}  `}</li>
                <li>
                    {element.name} 
                    
                    <button 
                            type="submit"
                            className="btn"
                            onClick={() => removeTodo(element.id)}
                        >
                            X
                    </button>
                    
                </li>
                
            
                

                <hr />
            </ul>
            );
        })}

        <hr />
        <hr />
        <hr />

        
        </div>
        </div>
    </Fragment>
    )
}

export default Home;    
