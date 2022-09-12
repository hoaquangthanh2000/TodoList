
import './App.css';
import {useCallback,useState,useEffect} from "react"
import TodoList from './components/TodoList';
import {v4} from "uuid"



const TODO_STORAGE = "TODO_APP"
function App() {
  const [btnClick,setBtnClick] = useState(false)
  const [todoList,setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [editItemId, setEditItemId] = useState();
  const [editText, setEditText] = useState(false);

  useEffect(()=> {
    localStorage.setItem(TODO_STORAGE, JSON.stringify(todoList))
  },[todoList])

  useEffect(()=>{
    const storagedTodoList = localStorage.getItem(TODO_STORAGE)
    if(storagedTodoList){
      setTodoList(JSON.parse(storagedTodoList))
    }
  },[])

  const handleAddBtnClick = useCallback((e)=> {
    if(btnClick){
      setTodoList([
        { id:v4(),name: textInput,isCompleted:false },...todoList,
      ])
      setTextInput("")
    }
  },[textInput,todoList])

  const onEditBtnClick = ((id)=>{
    const editTodo = todoList.find((item)=>item.id === id)
    setEditText(true)
    setTextInput(editTodo.name)
    setEditItemId(editTodo.id)
  })
  
  const handleEditBtnClick = () => {
    const listTodoChanged = [...todoList]
    if(editText){
      for(let i = 0 ; i<listTodoChanged.length ; i++){
        if(listTodoChanged[i].id === editItemId){
          listTodoChanged[i].name = textInput
        }
      }
    }
    setEditText(false)
    setTextInput("")
    setTodoList(listTodoChanged)
  }

  const onChangeTextInput = (e) => {
    setTextInput(e.target.value)
    setBtnClick(true)
  }

  const onCheckBtnClick = (id => {
    setTodoList((prevTodo) => 
      prevTodo.map((todo) => 
        todo.id === id ? {...todo,isCompleted: true} : todo
        )
      )
    }
  ) 

  const onDeleteBtnClick = (id => {
    const listTodoDelete = todoList.filter((item) => item.id !== id)
    setTodoList( listTodoDelete )
  })
  

  return (
    <div id='style'>
      <input
        className='css-input'
        placeholder='Nhập danh sách công việc'
        value={textInput}
        onChange={onChangeTextInput}
      />
    {
      !editText ? <button
        className='btn'
        onClick={handleAddBtnClick}
      >
        Thêm
      </button> : <button 
        className='btn'
        onClick={handleEditBtnClick}
      >
        Sửa
      </button>
    }

     <TodoList
      todoList={todoList}
      onCheckBtnClick={onCheckBtnClick}
      onEditBtnClick={onEditBtnClick}
      onDeleteBtnClick={onDeleteBtnClick}

     />
      
    </div>
    
  );
}

export default App;
