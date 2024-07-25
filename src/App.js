import SearchBox from './Components/SearchBox';
import { Box, Checkbox, Container, Flex } from '@chakra-ui/react';
import TaskBox from './Components/TaskBox';
import { useState } from 'react';
import TopNav from './Components/TopNav';



function App() {

  const [myTaskList, setmyTaskList] = useState(  JSON.parse(localStorage.getItem("myTaskList")) || [])
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState("")
  const [status, setStatus] = useState(false)
  
localStorage.setItem("myTaskList", JSON.stringify(myTaskList))
 
const handleDelete = (id) => {
    const filteredList = myTaskList.filter((task) => task.id !== id)
    setmyTaskList(filteredList)
  }

  const handleEdit = (id) => {
    setEdit(true)
    console.log(id)
    setEditId(id)
  }

  const handleStatus = (id) =>{
    const editStatus = myTaskList.map((el)=>{
      if(el.id == id){
        return {...el, status: !el.status}
      }
      return el
    })

    setmyTaskList(editStatus)
    
  }

  console.log(myTaskList)
 
  return (
    <Box minH={"100vh"} p={4} bgColor={"#0d1321"}  >

     


      <SearchBox setmyTaskList={setmyTaskList} />

      <Container minH={"75vh"} my={10} color={"#f0ebd8"} >
        {
          myTaskList.map((el) => {
         return <Flex>
          
           <Checkbox isChecked={el.status} colorScheme='green' onChange={()=>handleStatus(el.id)} p={3} size={"lg"} />
            
            <TaskBox myTaskList={myTaskList} setmyTaskList={setmyTaskList} editId={editId} edit={edit} handleEdit={handleEdit} handleDelete={handleDelete} key={el.id} {...el} />
          </Flex>
          
        })
        }

      </Container>
      
      <TopNav />
     
    </Box>
    
  );
}

export default App;
