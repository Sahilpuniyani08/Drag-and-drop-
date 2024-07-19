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
import Tooltip from "@mui/material/Tooltip";
import { Draggable, Droppable } from "react-beautiful-dnd";

const LeftDragable = ({ exercise , stepsCount ,handleStepsCount }) => {


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
        <Droppable droppableId="newdroppable-1">
          {(provided) => (
            <Grid container spacing={1}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {exercise.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id}  index={index}>
                  {(provided) => (
                   
                      <Grid key={index} item xs={4} {...provided.draggableProps} {...provided.dragHandleProps} ref ={provided.innerRef}>
                        <div
                          style={{
                            height: "60px",
                            display: "flex",
                            gap: "2px",
                            alignItems: "flex-end",
                            border: "1px solid #ccc",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            overflow: "hidden",
                            backgroundColor: "#F2F2F2",
                          }}
                        >
                          {section.sections.map((item, idx) => (
                            <div
                              key={idx}
                              className={`w-full bg-[#9b95f2]`}
                              style={{ height: item.height }}
                            />
                          ))}
                        </div>
                      </Grid>
                   
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </CardContent>
    </Card>
  );
};

export default LeftDragable;
