import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Banner.module.css";
import Container from "react-bootstrap/Container";

function Banner() {
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <h1>Optimize Your Meal</h1>
        <p>
          Select meal to add in a weak. You will be able to edit. Modify and
          chage the meal weaks.
        </p>
      </div>
      <Container className={classes.secondContainer}>
        <h2>Week Orders</h2>
      </Container>
    </div>
  );
}

export default Banner;
