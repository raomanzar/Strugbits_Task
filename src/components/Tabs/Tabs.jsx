import { useState } from "react";
import classes from "./Tabs.module.css";
import { Container } from "react-bootstrap";
import { Filter } from "@mui/icons-material";

function Tabs({ tabs, handleTab, handleModel }) {
  const [tabValue, setTabValue] = useState("all meals");

  return (
    <Container className={classes.mainDiv}>
      <ul className={classes.container}>
        {tabs?.map((value, indx) => (
          <li key={indx}>
            <button
              className={classes.tabButton}
              onClick={() => {
                handleTab(`${value.toLowerCase()}`);
                setTabValue(`${value.toLowerCase()}`);
              }}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      {tabValue === "all meals" ? (
        <button className={classes.addButton} onClick={() => handleModel(true)}>
          Add to Week
        </button>
      ) : null}
    </Container>
  );
}

export default Tabs;
