import React from "react";
import {
  Card,
  CardContent,
} from "@mui/material";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Skeleton from "./Skeleton";
import styled from "styled-components";

// Define a styled component for the draggable item
const StyledDraggableItem = styled.div`
  background-color: #f44336; /* Red color, change as needed */
  margin: 0 2px; /* Adjust margins */
  height: 40px; /* Fixed height */
  width: ${props => props.widthPercentage}%; /* Dynamic width */
`;

const RightDragable = ({ workout }) => {
  // Calculate total distance from workout data
  const totalDistance = workout.reduce((sum, bar) => {
    const distance = bar.sections.reduce(
      (sectionSum, section) => sectionSum + section.km,
      0
    );
    return sum + distance;
  }, 0);

  return (
    <Card sx={{ borderRadius: "20px", height: "50vh" }}>
      <CardContent sx={{ width: "100%", height: "100%", display: "flex" }}>
        <div className="w-full h-full flex">
          <Droppable droppableId="newdroppable-2" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full h-full gap-2 items-end flex"
              >
                {workout.length === 0 ? (
                  <Skeleton />
                ) : (
                  workout.map((a, id) => (
                    <Draggable key={id} draggableId={id.toString()} index={id}>
                      {(provided) => (
                        <StyledDraggableItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          widthPercentage={(a.totalWidth / totalDistance) * 100}
                        >
                          {/* Content inside your draggable item */}
                        </StyledDraggableItem>
                      )}
                    </Draggable>
                  ))
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </CardContent>
    </Card>
  );
};

export default RightDragable;
