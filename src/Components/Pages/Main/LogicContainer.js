import { useState } from "react";
import axios from "axios";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import CookieIcon from "@mui/icons-material/Cookie";
import FavoriteIcon from "@mui/icons-material/Favorite";

import classes from "./LogicContainer.module.scss";
import Burger from "../../Burger/Burger";

const LogicContainer = () => {
  const [BurgerBun, setBurgerBun] = useState("Standard");
  const [BurgerOnion, setBurgerOnion] = useState(true);
  const [BurgerCheese, setBurgerCheese] = useState(true);
  const [BurgerLettuce, setBurgerLettuce] = useState(true);
  const [BurgerTomato, setBurgerTomato] = useState(true);
  const [BurgerSauce, setBurgerSauce] = useState(true);
  const id = parseInt(localStorage.getItem("id"));

  if (BurgerOnion > 4 && BurgerOnion !== 0) {
    setBurgerOnion(4);
  }
  if (BurgerCheese > 4 && BurgerCheese !== 0) {
    setBurgerCheese(4);
  }
  if (BurgerLettuce > 4 && BurgerLettuce !== 0) {
    setBurgerLettuce(4);
  }
  if (BurgerTomato > 4 && BurgerTomato !== 0) {
    setBurgerTomato(4);
  }
  if (BurgerSauce > 4 && BurgerSauce !== 0) {
    setBurgerSauce(4);
  }

  const addOrder = () => {
    axios
      .post("http://sql11.freemysqlhosting.net:3306/orders/add", {
        id: id,
        Bun: BurgerBun,
        Cheese: BurgerCheese,
        Lettuce: BurgerLettuce,
        Onion: BurgerOnion,
        Tomato: BurgerTomato,
        Sauce: BurgerSauce,
      })
      .then((response) => {});

    localStorage.setItem("id", id + 1);
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.main}>
      <div className={classes.burgerCard}>
        <h3>Make your own Burger! </h3>
        <div className={classes.flexBox}>
          <Burger
            bun={BurgerBun}
            onion={BurgerOnion}
            cheese={BurgerCheese}
            lettuce={BurgerLettuce}
            tomato={BurgerTomato}
            sauce={BurgerSauce}
          />
          <form noValidate onSubmit={addOrder} name="burgerForm">
            <div className={classes.burgerBun}>
              <Button
                id="bunButton"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  backgroundColor: "#2f3037",
                  "&:hover": { backgroundColor: "#4e4f5c" },
                }}
              >
                Choose a bun type!
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "bunButton",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    setBurgerBun("Standard");
                    handleClose();
                  }}
                  disableRipple
                >
                  <FavoriteIcon />
                  Standard
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setBurgerBun("Sesame seeds");
                    handleClose();
                  }}
                  disableRipple
                >
                  <BubbleChartIcon />
                  Sesame Seeds
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setBurgerBun("Integral");
                    handleClose();
                  }}
                  disableRipple
                >
                  <CookieIcon />
                  Integral
                </MenuItem>
              </StyledMenu>
              <p>
                Current burger bun type: <b>{BurgerBun}</b>
              </p>
              {/* <div className={classes.bunControl}>
              <Link>Standard</Link>
              <Link onClick={() => setBurgerBun("Sesame Seeds")}>
                Sesame Seeds
              </Link>
              <Link onClick={() => setBurgerBun("Integral")}>Integral</Link>
            </div> */}
            </div>
            <div className={classes.ingredients}>
              <div className={classes.ingredientsControl}>
                <div className={classes.ingredient}>
                  <FormControlLabel
                    value="start"
                    control={
                      <Switch
                        checked={BurgerOnion}
                        onChange={() => setBurgerOnion(!BurgerOnion)}
                      />
                    }
                    label="Onion"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="start"
                    control={
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          setBurgerOnion(BurgerOnion + 1);
                        }}
                      >
                        +
                      </Button>
                    }
                    label=""
                    labelPlacement="start"
                  />
                  <Button
                    style={
                      BurgerOnion
                        ? { display: "block", marginLeft: "1rem" }
                        : { display: "none" }
                    }
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setBurgerOnion(BurgerOnion - 1);
                    }}
                  >
                    -
                  </Button>
                </div>

                <div className={classes.ingredient}>
                  <FormControlLabel
                    value="start"
                    control={
                      <Switch
                        checked={BurgerLettuce}
                        onChange={() => setBurgerLettuce(!BurgerLettuce)}
                      />
                    }
                    label="Lettuce"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="start"
                    control={
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          setBurgerLettuce(BurgerLettuce + 1);
                        }}
                      >
                        +
                      </Button>
                    }
                    label=""
                    labelPlacement="start"
                  />
                  <Button
                    style={
                      BurgerLettuce
                        ? { display: "block", marginLeft: "1rem" }
                        : { display: "none" }
                    }
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setBurgerLettuce(BurgerLettuce - 1);
                    }}
                  >
                    -
                  </Button>
                </div>
                <div className={classes.ingredient}>
                  <FormControlLabel
                    value="start"
                    control={
                      <Switch
                        checked={BurgerCheese}
                        onChange={() => setBurgerCheese(!BurgerCheese)}
                      />
                    }
                    label="Cheese"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="start"
                    control={
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          setBurgerCheese(BurgerCheese + 1);
                        }}
                      >
                        +
                      </Button>
                    }
                    label=""
                    labelPlacement="start"
                  />
                  <Button
                    style={
                      BurgerCheese
                        ? { display: "block", marginLeft: "1rem" }
                        : { display: "none" }
                    }
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setBurgerCheese(BurgerCheese - 1);
                    }}
                  >
                    -
                  </Button>
                </div>

                <div className={classes.ingredient}>
                  <FormControlLabel
                    value="start"
                    control={
                      <Switch
                        checked={BurgerTomato}
                        onChange={() => setBurgerTomato(!BurgerTomato)}
                      />
                    }
                    label="Tomato"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="start"
                    control={
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          setBurgerTomato(BurgerTomato + 1);
                        }}
                      >
                        +
                      </Button>
                    }
                    label=""
                    labelPlacement="start"
                  />
                  <Button
                    style={
                      BurgerTomato
                        ? { display: "block", marginLeft: "1rem" }
                        : { display: "none" }
                    }
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setBurgerTomato(BurgerTomato - 1);
                    }}
                  >
                    -
                  </Button>
                </div>
                <div className={classes.ingredient}>
                  <FormControlLabel
                    value="start"
                    control={
                      <Switch
                        checked={BurgerSauce}
                        onChange={() => setBurgerSauce(!BurgerSauce)}
                      />
                    }
                    label="Sauce"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="start"
                    control={
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          setBurgerSauce(BurgerSauce + 1);
                        }}
                      >
                        +
                      </Button>
                    }
                    label=""
                    labelPlacement="start"
                  />
                  <Button
                    style={
                      BurgerSauce
                        ? { display: "block", marginLeft: "1rem" }
                        : { display: "none" }
                    }
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setBurgerSauce(BurgerSauce - 1);
                    }}
                  >
                    -
                  </Button>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              sx={{
                backgroundColor: "#2f3037",
                margin: "2rem",
                "&:hover": { backgroundColor: "#4e4f5c" },
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogicContainer;
