import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Kitchen.module.scss";
import Button from "@mui/material/Button";
import { createClient } from "@supabase/supabase-js";

const Kitchen = (props) => {
  // useEffect(() => {
  //   axios
  //     .get(`http://sql11.freemysqlhosting.net:3306/orders`)
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  const [orders, setOrders] = useState([]);
  const [supabaseClient, setSupabaseClient] = useState();

  // const removeOrder = (id, e) => {
  //   const req = axios
  //     .delete(`http://sql11.freemysqlhosting.net:3306/orders/delete/${id}`)
  //     .then((response) => {});
  //   window.location.reload(false);
  // };

  useEffect(() => {
    const newClient = createClient(
      "https://xkvathcdcsqrsefwjhbe.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrdmF0aGNkY3NxcnNlZndqaGJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDg5MTcsImV4cCI6MjAxNzI4NDkxN30.ivsLZkDCYJNUqjW3OXCnGE51D3-Dxl_W60ZlSrO5QYc"
    );
    setSupabaseClient(newClient);
    newClient
      .from("Orders")
      .select("*")
      .then((response) => setOrders(response.data));
  }, []);

  async function removeOrder(id) {
    const { data, error } = await supabaseClient
      .from("Orders")
      .delete()
      .match({ id: id });
    window.location.reload(false);
  }

  return (
    <div className={classes.allOrders}>
      {orders.map((d, i) => {
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
                onClick={(e) => removeOrder(d.id)}
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
