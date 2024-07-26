import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TaskBox = ({
  myTaskList,
  setmyTaskList,
  task,
  status,
  editId,
  id,
  handleDelete,
  handleEdit,
  edit,
}) => {
  const [taskEdit, setTaskEdit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedList = myTaskList.map((el) => {
      if (el.id === editId) {
        return { ...el, task: taskEdit };
      }
      return el;
    });

    setmyTaskList(editedList);
    handleEdit(null); // Reset edit mode
  };

  return (
    <Box sx={{touchAction:"none"}} my={2} p={3} bgColor={ status ? "#588157" : "#1d2d44"} w={"100%"}>
        
      
        {edit && id == editId ? (
          <form onSubmit={handleSubmit}>
            <Flex justify={"space-between"}>
              <Input w={"90%"} onChange={(e) => setTaskEdit(e.target.value)} />
              <Button ml={4} type="submit">
                Edit
              </Button>
            </Flex>
          </form>
        ) : (
          <Flex w={"100%"} justify={"space-between"}>
            <Text>{task}</Text>

            <Box>
              <Button mr={1} onClick={() => handleEdit(id)}>
                <EditIcon />
              </Button>
              <Button onClick={() => handleDelete(id)}>
                <DeleteIcon />
              </Button>
            </Box>
          </Flex>
        )}
      
    </Box>
  );
};

export default TaskBox;
