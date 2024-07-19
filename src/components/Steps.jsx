import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const Steps = ({ stepsCount }) => {
  
  return (
    <section>
      {stepsCount?.map((item, index) => (
        <Card className="my-4 rounded-lg" key={index} >
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#ededfd",
                    padding: "5px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                  key={index}
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
                      <Typography variant="body2">Run</Typography>
                    </div>
                  </div>

                  <div>
                    <Button
                      variant="outlined"
                      style={{
                        border: "1px solid #cccc",
                        borderRadius: "10px",
                        fontSize: "11px",
                        fontweight: "600",
                        backgroundColor: "#fff",
                        color: "black",
                      }}
                    >
                     {step.km} km
                    </Button>
                    <IconButton style={{ marginLeft: "8px" }}>
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
              ))}
          </CardContent>
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
                fontweight: "600",
                backgroundColor: "#fff",
              }}
            >
              Add Substep
            </Button>
          </Divider>
          <CardActions>{/* Actions for the card if needed */}</CardActions>
        </Card>
      ))}
    </section>
  );
};

export default Steps;
