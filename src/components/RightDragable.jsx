import React from "react";
import { Card, CardContent } from "@mui/material";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Skeleton from "./Skeleton";
import styled from "styled-components";

// Define a styled component for the draggable item
const StyledDraggableItem = styled.div`
  background-color: #fff; /* Red color, change as needed */

  height: 100%; /* Fixed height */
  width: ${(props) => props.widthPercentage}%; /* Dynamic width */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 2px;
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
                className="w-full h-full gap-[2px] items-end flex"
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
                          {a.sections.map((item, idx) => (
                            <div
                              key={idx}
                              className="bg-[#9a94f3]"
                              style={{
                                height: item.height,
                                width: (item.km / a.totalWidth) * 100 + "%",
                              }}
                            />
                          ))}
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
