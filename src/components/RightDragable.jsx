import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Draggable, Droppable } from "react-beautiful-dnd";

const RightDragable = ({workout}) => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <Card sx={{ borderRadius: "20px", height: "auto" }}>
      <CardContent>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className="font-bold tracking-tighter text-sm">
            Click or drag the blocks to build workouts
          </span>
          <IconButton aria-label="help">
            <HelpOutlineIcon />
          </IconButton>
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Droppable droppableId="newdroppable-2" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="w-full h-full flex gap-10"
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
                        className="h-full w-20 bg-red-300 m-6"
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
      </CardContent>
    </Card>
  );
};

export default RightDragable;
