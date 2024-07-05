import Container from "react-bootstrap/Container";
import classes from "./Card.module.css";
import GradeIcon from "@mui/icons-material/Grade";

function Card({ id, data, handleSelect, selectValue, deleteFunc }) {
  return (
    <Container
      fluid
      className={classes.container}
      onClick={() => handleSelect([!selectValue[0], id, data])}
      style={
        selectValue[1] === id && selectValue[0]
          ? { border: "1px solid blue" }
          : null
      }
    >
      <div className={classes.imageDiv}>
        <img src={data.image} />
      </div>
      <h5>{data.name}</h5>
      <div className={classes.description}>{data.instructions}</div>
      <div className={classes.tagsDiv}>
        <p>
          Cuisine:
          <span>{data.tags[1]}</span>
        </p>
        <p>
          Rating:
          <span>{data.rating}</span>
          <span>
            <GradeIcon className={classes.gradeicon} />
            <GradeIcon className={classes.gradeicon} />
            <GradeIcon className={classes.gradeicon} />
            <GradeIcon className={classes.gradeicon} />
          </span>
        </p>
      </div>
      {data.remove && (
        <button
          className={classes.deleteBtn}
          onClick={() => deleteFunc(id, data.tab)}
        >
          Delete
        </button>
      )}
    </Container>
  );
}

export default Card;
