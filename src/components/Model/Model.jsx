import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./Model.module.css";

function Model({ handleClose, open, tabsArr, meal, handleSave }) {
  const [selectWeek, setSelectWeek] = useState("");

  const onSave = () => {
    handleSave({ ...meal, tab: selectWeek.toLocaleLowerCase(), remove: true });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            Select Week
          </Typography>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            {tabsArr?.map((ele, indx) => (
              <Button
                sx={{ "&:hover": { borderRadius: "3px" } }}
                key={indx}
                onClick={() => setSelectWeek(ele)}
                style={
                  selectWeek === ele
                    ? { background: "blue", color: "#fff" }
                    : null
                }
              >
                {ele}
              </Button>
            ))}
          </div>
          {meal && (
            <div className={classes.selectMeal}>
              <img src={meal.image} />
              <p>{meal.name}</p>
            </div>
          )}
          <Button
            sx={{
              border: "2px solid #00a4ff",
              borderRadius: "5px",
              "&:hover": {
                color: " #ffff",
                backgroundColor: "#00a4ff",
                borderRadius: "5px",
                border: "2px solid #00a4ff",
              },
            }}
            onClick={() => onSave({ ...meal, tab: selectWeek })}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Model;
