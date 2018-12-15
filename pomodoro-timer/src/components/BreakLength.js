import React from "react";
import styled from "styled-components";
//break length component
const BreakLength = props => {
  return (
    <div className="breakContainer">
      <form action="" className="form break" onSubmit={props.submitBreak}>
        <label for="breakMins">break-length</label>
        <input
          type="number"
          className="input break"
          id="breakMins"
          min="0"
          onChange={props.setLength}
          defaultValue="5"
        />
      </form>
      <button onClick={props.submitBreak}>Submit break length</button>
    </div>
  );
};

export default BreakLength;
