import classes from "./Home.module.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Card from "../components/Card/Card";
import Banner from "../components/Banner/Banner";
import Tabs from "../components/Tabs/Tabs";
import { Container } from "react-bootstrap";
import Model from "../components/Model/Model";

function Home() {
  const tabsArr = ["All Meals", "Week 1", "Week 2", "Week 3", "Week 4"];
  const [data, setData] = useState([]);
  const [tabData, setTabData] = useState(null);
  const [tab, setTab] = useState("all meals");
  const [model, setModel] = useState(false);
  const [selectedCard, setSelectedCard] = useState([false, null, {}]);

  const getData = async () => {
    const response = await Axios.get("https://dummyjson.com/recipes");
    let newArr = response.data.recipes?.map((ele) => ({
      ...ele,
      tab: "",
      select: false,
    }));
    setData(newArr);

    let tabsObj = tabsArr.reduce((acc, curVal) => {
      if (curVal !== "All Meals") {
        acc[curVal.toLowerCase()] = [];
      }
      return acc;
    }, {});

    setTabData(tabsObj);
  };

  const saveFunc = (value) => {
    let recipeExist = tabData[value.tab].find((ele) => ele.id === value.id);
    if (recipeExist) {
      return alert(`${value.name} is already exist in ${value.tab}`);
    } else {
      for (let key in tabData) {
        if (key === value.tab) {
          setTabData((prev) => ({
            ...prev,
            [value.tab]: [...prev[value.tab], value],
          }));
        }
      }
    }
    setModel(false);
    setSelectedCard([false, null, {}]);
  };

  const handleDelete = (id, tab) => {
    for (let key in tabData) {
      if (key === tab) {
        setTabData((prev) => ({
          ...prev,
          [tab]: prev[tab].filter((ele) => ele.id !== id),
        }));
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Banner />
      <Tabs tabs={tabsArr} handleTab={setTab} handleModel={setModel} />
      <Container className={classes.content}>
        <Container className={classes.content}>
          {data.length < 1 ? (
            <h1>Loading...</h1>
          ) : tab === "all meals" ? (
            data.map((ele) => (
              <Card
                id={ele.id}
                data={ele}
                key={ele.id}
                handleSelect={setSelectedCard}
                selectValue={selectedCard}
              />
            ))
          ) : tabData[tab]?.length > 0 ? (
            tabData[tab].map((ele) => (
              <Card
                id={ele.id}
                data={ele}
                key={ele.id}
                handleSelect={setSelectedCard}
                selectValue={selectedCard}
                deleteFunc={handleDelete}
              />
            ))
          ) : (
            <h1>No Recipes Found</h1>
          )}
        </Container>
      </Container>
      <Model
        handleClose={setModel}
        open={model}
        tabsArr={tabsArr.slice(1)}
        meal={selectedCard[2]}
        handleSave={saveFunc}
      />
    </div>
  );
}

export default Home;
