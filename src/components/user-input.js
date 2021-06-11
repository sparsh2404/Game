import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const UserInput = (props) => {
  
  return (
      <>
        <div className="bg_game">
          <Typography>Lets Start Game </Typography>
          <form>
            <label>Player 1 Name</label>
            <br />
            <input
              type="text"
              value={props.player1}
              onChange={props.handleInput1Change} 
            />
            <br />
            <label>Player 2 Name</label>
            <br />
            <input
              type="text"
              value={props.player2}
              onChange={props.handleInput2Change}
            />
            <br />
            <Link to={{
                pathname:'/winner',
                state: ""
              }}>
              <button className="btn">Continue</button>
            </Link>
          </form>
        </div>
      </>
  );
};

export default UserInput;
