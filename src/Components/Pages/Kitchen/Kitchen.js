import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Kitchen.module.scss";
import Button from "@mui/material/Button";

const Kitchen = (props) => {
  useEffect(() => {
    axios
      .get(`http://sql11.freemysqlhosting.net:3306/orders`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const [data, setData] = useState([]);

  const removeOrder = (id, e) => {
    const req = axios
      .delete(`http://sql11.freemysqlhosting.net:3306/orders/delete/${id}`)
      .then((response) => {});
    window.location.reload(false);
  };

  return (
    <div className={classes.allOrders}>
      {data.map((d, i) => {
        return (
          <div className={classes.order} Key={d.id} id={d.id}>
            <p className={classes.headline}>
              <b>Order nr. {d.id}</b>
            </p>
            <p>
              Bun: <br />
              <b>{d.Bun}</b>
            </p>
            <p>Cheese: {d.Cheese}</p>
            <p>Lettuce: {d.Lettuce}</p>
            <p>Onion: {d.Onion}</p>
            <p>Tomato: {d.Tomato}</p>
            <p>Sauce: {d.Sauce}</p>
            <p>--------------------</p>
            <p>
              <Button
                variant="contained"
                onClick={(e) => removeOrder(d.id, e)}
                sx={{
                  backgroundColor: "#c42929",
                  margin: "2rem",
                  "&:hover": { backgroundColor: "#db5252" },
                }}
              >
                Finished
              </Button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Kitchen;
