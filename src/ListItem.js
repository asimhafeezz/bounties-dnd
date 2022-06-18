import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const CardHeader = styled.div`
  font-weight: bold;
  font-size: 17px;
  padding: 10px;
`;

const DragItem = styled.div`
  border-radius: 10px;
  background: rgb(122, 92, 153);
  margin: 0 0 15px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
  min-width: 200px;
  color: white;
`;

const Text = styled.p`
  font-size: 15px;
  padding: 0 10px;
  margin-bottom: -6px;
`;

//change bgColor accordingly
const divLineStyle = (bgColor) => ({
  width: "100%",
  backgroundColor: bgColor,
  color: "white",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderRadius: "0 0 10px 10px",
  height: "30px"
});

const ListItem = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardHeader>{item.content}</CardHeader>
            <Text>{item.text}</Text>
            <div style={divLineStyle(item.color)}>
              <p>Reward</p>
              <p>$300</p>
            </div>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
