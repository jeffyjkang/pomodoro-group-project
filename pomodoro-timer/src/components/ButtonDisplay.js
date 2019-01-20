import React from 'react'
//button component for running flag, display component is start or pause
//button component for reset button which resets mins to session length, and secs to 0
const ButtonDisplay = props => {
  return (
    <div>
      <button className="startPauseButton" onClick={props.pauseStart}>
        {props.running ? 'Pause' : props.onBreak ? 'Start Break' : 'Start'}
      </button>
      <button className="resetButton" onClick={props.reset}>
        Reset session length
      </button>
    </div>
  )
}

export default ButtonDisplay
