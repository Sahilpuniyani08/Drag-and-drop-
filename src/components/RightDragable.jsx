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
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <Card sx={{ borderRadius: "20px",height: "50vh" }}>
      <CardContent sx={{ width:"100%",height: "100%", display: "flex" }}>
        <div className=" y-axis w-full h-full  flex  ">
          <div className="  h-[100%] w-[7%]  flex gap-3 flex-col-reverse items-baseline">
            {[0, 25, 50, 75, 100, 125, 150].map((item, index) => (
              <div className="text-slate-700 ">{item} %</div>
            ))}
          </div>
          {
            workout.length ==1 ? 
            (
       <Skeleton />

            ):
            (
 <Droppable droppableId="newdroppable-2" direction="horizontal" >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full h-full flex gap-2 items-end "
              >
                {arr.map((a, id) => {
                  return (
                    <Draggable key={id} draggableId={id} index={id}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          index={id}
                          className="h-10 w-20 bg-red-300 mx-21"
                        >
                          sa
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
            )
          }
        
        </div>
      </CardContent>
    </Card>
  );
};

export default RightDragable;
