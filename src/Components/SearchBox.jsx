import React, { useState } from "react";
import { Box, Button, Container, FormControl, Input } from "@chakra-ui/react";

const SearchBox = ({ setmyTaskList }) => {
  const [task, setTask] = useState("");
  console.log(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
     
    setmyTaskList((pre)=>[...pre , {task, status:false, id:Date.now()}])
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container pt={5} display={"flex"}>
        <Input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          color={"#f0ebd8"}
          variant="flushed"
          placeholder="write your task"
        />

        <Button type="submit" borderRadius={"0"}>
          add
        </Button>
      </Container>
    </form>
  );
};

export default SearchBox;
