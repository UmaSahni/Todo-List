import { Checkbox, Flex } from "@chakra-ui/react";
import React from "react";
import TaskBox from "./TaskBox";
import {  useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Droppable = ({
  el,
  handleStatus,
  myTaskList,
  setmyTaskList,
  editId,
  edit,
  handleEdit,
  handleDelete,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    cursor, active
  } = useSortable({ id: el.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor : active ? "grabbing": "grab"
  };

  return (
    <Flex ref={setNodeRef} sx={style} {...attributes} {...listeners}>
       
      <Checkbox
        isChecked={el.status}
        colorScheme="green"
        onChange={() => handleStatus(el.id)}
        p={3}
        size={"lg"}
      />

      <TaskBox
        myTaskList={myTaskList}
        setmyTaskList={setmyTaskList}
        editId={editId}
        edit={edit}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        key={el.id}
        {...el}
      />
     
    </Flex>
  );
};

export default Droppable;
