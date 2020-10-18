import React, {useState} from 'react';
import './App.css';

const App = ()=>{
  const [inputevent, setInputevent] = useState();
  const [item, setItem] = useState([]);

  const InputE = (event)=>{
    setInputevent(event.target.value)
    
  }
  const Itemstore =()=>{
    setItem((allarraydata)=>{
         return [...allarraydata, inputevent];
    });
    setInputevent("")
  }
  const Itemdel = (index)=>{
    return setItem((olditem)=>{
      return olditem.filter((arrElem, inde)=>{
        // console.log(arrElem)
        return inde !== index ;/*js ka liya false ha del ho gai ga baki true appear ho ga */
      })
    })

  }

  return(
    <>
    <div className="main">
      <div className="center">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text"
          placeholder="Add items"
          onChange={InputE}
          value={inputevent}
        />
        <button onClick={Itemstore}> + </button>
        <ol>
          {/* <li>{inputevent}</li> */}
          {item.map((itemval, index)=>{
            
            return (<>
              
             <div className="todo-style">
              <i className="fa fa-times" aria-hidden="true" onClick={()=>Itemdel(index)}></i>
             <li>{itemval}</li>
             </div>
            </>)
          })}
        </ol>
      </div>
    </div>
    </>
  )
}

export default App;
