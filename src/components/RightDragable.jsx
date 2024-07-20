import React, { useRef } from "react";
import { Card, CardContent } from "@mui/material";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Skeleton from "./Skeleton";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Button from "@mui/material/Button";
// Define a styled component for the draggable item
const StyledDraggableItem = styled.div`
  background-color: #fff; /* Change color as needed */
  height: 100%; /* Full height of the container */
  width: ${(props) => props.widthpercentage}%; /* Dynamic width */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 2px;
  position: relative; /* Position for the cross icon */
  cursor: ${(props) =>
    props.isDraggable
      ? "grab"
      : "default"}; /* No dragging cursor if not draggable */
  transition: background-color 0.3s; /* Smooth transition for hover effect */

  /* Hover effect to show the cross icon */
  &:hover .cross-icon {
    opacity: 1;
  }
`;

// Define a styled component for the cross icon
const CrossIcon = styled(FaTimes)`
  position: absolute;
  top: ${(props) => props.top - 5}%; /* Dynamic position based on height */
  right: 10px;
  color: #000000;
  cursor: pointer;
  transform: translateY(-50%); /* Center vertically */
  z-index: 1;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s; /* Smooth transition for visibility */
`;

// Define a styled component for the X-Axis
const XAxisContainer = styled.div`
  position: relative;
  height: 30px; /* Height of the X-axis container */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
`;

// Define a styled component for the X-Axis labels
const XAxisLabel = styled.div`
  position: absolute;
  bottom: 0;
  color: #cccccc; /* X-axis label color */
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

// Define a styled component for the Y-Axis
const YAxisContainer = styled.div`
  position: relative;
  width: 50px; /* Width of the Y-axis container */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 26px;
`;



// Define a styled component for the Y-Axis labels
const YAxisLabel = styled.div`
  color: #cccccc; /* Y-axis label color */
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

const RightDragable = ({ workout, setWorkout }) => {
  console.log(workout);

  const containerRef = useRef(null);

  // Calculate total distance from workout data
  const totalDistance = workout.reduce((sum, bar) => {
    const distance = bar.sections.reduce(
      (sectionSum, section) => sectionSum + section.km,
      0
    );
    return sum + distance;
  }, 0);

  // Function to convert percentage to number
  const parsePercentage = (percentage) => {
    return parseFloat(percentage.replace("%", ""));
  };

  // Function to calculate max height of sections in a workout item
  const getMaxSectionHeightInPixels = (sections) => {
    const maxHeightPercentage = Math.max(
      ...sections.map((section) => parsePercentage(section.height))
    );
    return maxHeightPercentage;
  };

  // Click handler for cross icon
  const handleCrossIconClick = (index) => {
    console.log("Cross icon clicked, index:", index);
    const newWorkout = workout.filter((_, i) => i !== index);
    setWorkout(newWorkout);
    // Add your custom logic here
  };

  // Calculate X-axis labels
  const calculateXAxisLabels = () => {
    const interval = totalDistance > 10 ? 2 : 1; // Adjust interval based on distance
    const labels = [];
    if(workout.length == 0){
      for (let i = 0; i <= 10; i ++) {
        labels.push(i);
      } 
      return labels
    }
    for (let i = 0; i <= totalDistance; i += interval) {
      labels.push(i);
    }
    return labels;
  };

  const xAxisLabels = calculateXAxisLabels();
  // Static Y-axis labels
  const yAxisLabels = [0, 25, 50, 75, 100].reverse();

  return (
    <Card sx={{ borderRadius: "20px", height: "50vh" }}>
      <CardContent sx={{display: "flex", flexDirection:"column",width: "100%", height: "100%", }}>
      <Button
          sx={{
            alignItems: "baseline",
            fontSize: "8px",
            backgroundColor: "#f8f8f8",
            alignSelf: "end",
            borderRadius: "20px",
            color: "grey",
            textTransform: "capitalize",
            marginBottom:"10px"
          }}
          onClick={() => {
            setWorkout([]);
          }}
        >
          Clear Block
        </Button>
        <div style={{ width: "100%", height: "100%", display: "flex" }}>
        {/* Y-Axis Container */}
        <YAxisContainer>
          {yAxisLabels.map((label, index) => (
            <YAxisLabel
              key={index}
              style={{ top: `${100 - (label / 100) * 100}%` }} // Position labels based on percentage
            >
              {label}%
            </YAxisLabel>
          ))}
        </YAxisContainer>

        {/* Main Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div className="w-full h-full flex">
            <Droppable droppableId="newdroppable-2" direction="horizontal">
              {(provided) => (
                <div
                  ref={(node) => {
                    provided.innerRef(node);
                    containerRef.current = node; // Assign ref to container
                  }}
                  {...provided.droppableProps}
                  className="w-full h-full gap-[2px] items-end flex"
                >
                  {workout.length === 0 ? (
                    <Skeleton />
                  ) : (
                    workout.map((a, id) => {
                      // Find max height of the sections for current item
                      const maxSectionHeight = getMaxSectionHeightInPixels(
                        a.sections
                      );
                      console.log(a);
                      return (
                        <Draggable
                          key={id}
                          draggableId={id.toString()}
                          index={id}
                          isDragDisabled={true} // Disable dragging for this item
                        >
                          {(provided) => (
                            <StyledDraggableItem
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              widthpercentage={
                                (a.totalWidth / totalDistance) * 100
                              }
                              isDraggable={false} // Indicate that this item is not draggable
                            >
                              {a.sections.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="bg-[#9a94f3]"
                                  style={{
                                    height: item.height, // Height as percentage
                                    width: (item.km / a.totalWidth) * 100 + "%",
                                  }}
                                />
                              ))}
                              <CrossIcon
                                className="cross-icon"
                                top={100 - maxSectionHeight} // Adjust the position based on container height
                                onClick={() => handleCrossIconClick(id)} // Click handler for cross icon
                              />
                            </StyledDraggableItem>
                          )}
                        </Draggable>
                      );
                    })
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          {/* X-Axis Component */}
          <XAxisContainer>
            {xAxisLabels.map((label, index) => (
              <XAxisLabel
                key={index}
                style={{ left: `${(label / (totalDistance==0 ? 10: totalDistance)) * 100}%` }}              >
                {label}
              </XAxisLabel>
            ))}
          </XAxisContainer>
        </div>
        </div>
      
      </CardContent>
    </Card>
  );
};

export default RightDragable;
