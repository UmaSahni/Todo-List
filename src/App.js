import SearchBox from './Components/SearchBox';
import { Box, Checkbox, Container, Flex } from '@chakra-ui/react';
import TaskBox from './Components/TaskBox';
import { useState } from 'react';
import TopNav from './Components/TopNav';
import { closestCorners, DndContext, useSensor, useSensors, KeyboardSensor, PointerSensor, TouchSensor, } from "@dnd-kit/core"
import Droppable from './Components/Droppable';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';


function App() {

  const [myTaskList, setmyTaskList] = useState(JSON.parse(localStorage.getItem("myTaskList")) || [])
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

  const handleStatus = (id) => {
    const editStatus = myTaskList.map((el) => {
      if (el.id == id) {
        return { ...el, status: !el.status }
      }
      return el
    })

    setmyTaskList(editStatus)

  }

  console.log(myTaskList)

  const getPosition = id => myTaskList.findIndex(task => task.id === id)

  const handleDragEnd = (event) => {
    const { active, over } = event
    
    if(active.id === over.id) return

    setmyTaskList(()=>{
      let originalPosition = getPosition(active.id)
      let newPosition = getPosition(over.id)

      return arrayMove(myTaskList, originalPosition, newPosition)
    })

  }


  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint:{
        distance:3,
      }
    }),
   
    useSensor(TouchSensor)
  );

  return (
    <Box minH={"100vh"} p={4} bgColor={"#0d1321"}  >
      <SearchBox setmyTaskList={setmyTaskList} />

      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners} >
        <Container minH={"75vh"} my={10} color={"#f0ebd8"} >
          <SortableContext strategy={verticalListSortingStrategy} items={myTaskList} >
            {
              myTaskList.map((el) => <Droppable key={el.id} el={el} handleStatus={handleStatus} myTaskList={myTaskList} setmyTaskList={setmyTaskList} editId={editId} edit={edit} handleEdit={handleEdit} handleDelete={handleDelete} />)
            }
          </SortableContext>
        </Container>
      </DndContext>

      <TopNav />

    </Box>

  );
}

export default App;
