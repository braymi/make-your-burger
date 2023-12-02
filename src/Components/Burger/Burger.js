import { BrowserView, MobileView } from "react-device-detect";
import "./Burger.scss";
import { useState } from "react";

const Burger = (props) => {
  let SesameBun = useState("");
  if (props.bun === "Sesame seeds") {
    SesameBun = "Sesame";
  } else {
    SesameBun = props.bun;
  }

  return (
    <>
      <BrowserView className="container">
        <div className={`${SesameBun}`}>
          <div
            className="sesame"
            style={
              SesameBun == "Sesame" ? { display: "block" } : { display: "none" }
            }
          ></div>
        </div>
        {Array(props.onion)
          .fill(true)
          .map((_, i) => (
            <div
              className={`onion ${props.onion}`}
              key={i}
              style={{ top: `${-5 + (i + 1) * 18}px` }}
            />
          ))}

        {Array(props.lettuce)
          .fill(true)
          .map((_, i) => (
            <div
              className={`lettuce ${props.lettuce}`}
              key={i}
              style={{ top: `${142 + (i + 1) * 18}px` }}
            />
          ))}

        {Array(props.cheese)
          .fill(true)
          .map((_, i) => (
            <div
              className={`cheese ${props.cheese}`}
              key={i}
              style={{ top: `${67 + (i + 1) * 18}px` }}
            />
          ))}
        {Array(props.tomato)
          .fill(true)
          .map((_, i) => (
            <div
              className={`tomato ${props.tomato}`}
              key={i}
              style={{ top: `${212 + (i + 1) * 18}px` }}
            />
          ))}

        <div className={`meat ${props.meat}`}>
          {Array(props.sauce)
            .fill(true)
            .map((_, i) => (
              <div
                className={`sauce ${props.sauce}`}
                key={i}
                style={{ left: ` ${3.5 + i * 1.5}rem` }}
              />
            ))}
        </div>
        <div className={`${SesameBun}End`}></div>
      </BrowserView>
      <MobileView className="container">
        <div className={`${props.bun}`}>
          <div
            className="sesame"
            style={SesameBun ? { display: "block" } : { display: "none" }}
          ></div>
        </div>
        {Array(props.onion)
          .fill(true)
          .map((_, i) => (
            <div
              className={`onion ${props.onion}`}
              key={i}
              style={{ top: `${0 + i * 1.1}rem` }}
            />
          ))}

        {Array(props.cheese)
          .fill(true)
          .map((_, i) => (
            <div
              className={`cheese ${props.cheese}`}
              key={i}
              style={{ top: `${4.5 + i * 1.1}rem` }}
            />
          ))}

        {Array(props.lettuce)
          .fill(true)
          .map((_, i) => (
            <div
              className={`lettuce ${props.lettuce}`}
              key={i}
              style={{ top: `${9 + i * 1.1}rem` }}
            />
          ))}

        {Array(props.tomato)
          .fill(true)
          .map((_, i) => (
            <div
              className={`tomato ${props.tomato}`}
              key={i}
              style={{ top: `${13 + i * 1.1}rem` }}
            />
          ))}
        {Array(props.sauce)
          .fill(true)
          .map((_, i) => (
            <div
              className={`sauce ${props.sauce}`}
              key={i}
              style={{ left: `${(i + 1) * 1.25}rem` }}
            />
          ))}
        <div className={`meat ${props.meat}`}></div>
      </MobileView>
    </>
  );
};

export default Burger;
