import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Divider,
  Box,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Skeleton from "./Skeleton";

const RightDragable = ({ workout }) => {
  console.log("Right Dragable", workout);

  const totalDistance = workout.reduce((sum, bar) => {
    // Access the `km` property from each section object
    const distance = bar.sections.reduce(
      (sectionSum, section) => sectionSum + section.km,
      0
    );
    return sum + distance;
  }, 0);
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <Card sx={{ borderRadius: "20px", height: "50vh" }}>
      <CardContent sx={{ width: "100%", height: "100%", display: "flex" }}>
        <div className="w-full h-full  flex  ">
          {/* <div className="  h-[100%] w-[7%]  flex gap-3 flex-col-reverse items-baseline">
            {[0, 25, 50, 75, 100, 125, 150].map((item, index) => (
              <div className="text-slate-700 ">{item} %</div>
            ))}
          </div> */}

          <Droppable droppableId="newdroppable-2" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full h-full gap-2 items-end flex"
              >
                {workout.length == 0 ? (
                  <Skeleton />
                ) : (
                  workout.map((a, id) => {
                    return (
                      <Draggable key={id} draggableId={id} index={id}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            index={id}
                            // style={{
                            //   // width:(a.totalWidth/totalDistance)*100 + '%'
                            //   // padding:
                            // }}
                            
                            className={`bg-red-300 mx-21 w-20 h-10 w-[${(a.totalWidth/totalDistance)*100 + '%'}]`}
                          >

                            {a.sections.map((item, idx) => (
                              <div
                                key={idx}
                                className={` bg-[#bbb9ce]`}
                                style={{ height: '30px',
                                   width:(item.km/a.totalWidth)*100 +'%' 
                                  //  width:'30px'
                                  }}
                                
                              />
                            ))} 
                          </div>
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
      </CardContent>
    </Card>
  );
};

export default RightDragable;
