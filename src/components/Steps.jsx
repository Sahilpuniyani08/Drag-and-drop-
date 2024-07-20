import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const Steps = ({ workout, updateStepKm }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [kmValue, setKmValue] = useState("");
  const [selectedItemId, setSelectedItemId] = useState("");
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState("");

  const editingRef = useRef(null); // Ref for the editing area

  // Handler to start editing
  const handleEditClick = (exerciseIndex, currentKm, item_id, index) => {
    console.log("edit");
    setSelectedExerciseIndex(exerciseIndex);
    setEditingIndex(index);
    setKmValue(currentKm);
    setSelectedItemId(item_id);
  };

  // Handler to save the edited value
  const handleSaveClick = (index) => {
    updateStepKm(editingIndex, selectedExerciseIndex, kmValue);
    console.log("Updated");
    setEditingIndex(null); // Close the editing input
    setKmValue("");
    setSelectedExerciseIndex(null);
  };

  // Handle clicks outside the editing area
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event.target, editingRef.current);
      if (editingRef.current && !editingRef.current.contains(event.target)) {
        setEditingIndex(null); // Close the editing input
        setKmValue("");
        setSelectedExerciseIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      {workout?.map((item, index) => (
        <Card className="my-4 rounded-lg" key={index}>
          <CardContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle2">{item.name}</Typography>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
            <Divider style={{ margin: "12px 0" }} />
            {item.sections.length > 0 &&
              item.sections.map((step, idx) => (
                <div className="flex flex-col gap-2 mt-10" key={idx}>
                  <div
                    ref={
                      selectedExerciseIndex === idx && editingIndex === index
                        ? editingRef
                        : null
                    } // Attach ref only when editing
                    onClick={() =>
                      handleEditClick(idx, step.km, item.id, index)
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor:
                        selectedExerciseIndex === idx && editingIndex === index
                          ? "#ededfd"
                          : "#ffffff",
                      border: "1px solid #ededfd",
                      padding: "5px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <div className="text-sm">
                          <DragIndicatorIcon />
                        </div>
                        <div className="h-10 w-10 rounded-sm bg-[#F2F2F2F2]"></div>
                        <Typography variant="body2" sx={{ fontWeight: "600" }}>
                          {step.exerciseLevel || item.name}{" "}
                        </Typography>
                      </div>
                    </div>

                    <div>
                      {editingIndex === index &&
                      selectedExerciseIndex == idx ? (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <TextField
                            value={kmValue}
                            onChange={(e) => setKmValue(e.target.value)}
                            variant="outlined"
                            size="small"
                            style={{ marginRight: "8px" }}
                          />
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#9a94f3",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveClick(idx);
                            }}
                          >
                            Save
                          </Button>
                        </div>
                      ) : (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Button
                            variant="outlined"
                            style={{
                              border: "1px solid #cccc",
                              borderRadius: "10px",
                              fontSize: "14px",
                              fontWeight: "500",
                              backgroundColor: "#fff",
                              color: "black",
                              lineHeight: "18px",
                              fontFamily: "DM Sans Serif",
                            }}
                            onClick={() =>
                              handleEditClick(idx, step.km, item.id, index)
                            }
                          >
                            {step.km} km
                          </Button>
                          <IconButton style={{ marginLeft: "8px" }}>
                            <MoreVertIcon />
                          </IconButton>
                        </div>
                      )}
                    </div>
                  </div>

                  <Divider style={{ position: "relative", margin: "12px 0" }}>
                    <Button
                      variant="outlined"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        border: "1px solid #5647ea",
                        color: "black",
                        borderRadius: "50px",
                        fontSize: "11px",
                        fontWeight: "600",
                        backgroundColor: "#fff",
                      }}
                    >
                      Add Substep
                    </Button>
                  </Divider>
                </div>
              ))}
          </CardContent>

          <CardActions>{/* Actions for the card if needed */}</CardActions>
        </Card>
      ))}
    </section>
  );
};

export default Steps;
