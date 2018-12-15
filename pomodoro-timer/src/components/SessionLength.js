import React from "react";
import styled from "styled-components";
//session length component
const SessionLength = props => {
  return (
    <div className="sessionContainer">
      <form action="" className="form session" onSubmit={props.submitLength}>
        <label for="setSessionLength">session-length</label>
        <input
          type="number"
          className="input session"
          id="setSessionLength"
          min="0"
          onChange={props.setLength}
          defaultValue="25"
        />
      </form>
      <button onClick={props.submitLength}>Submit session length</button>
    </div>
  );
};

export default SessionLength;
