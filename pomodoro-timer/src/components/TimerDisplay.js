import React from 'react'

const TimerDisplay = props => {
  let mins = props.counterMins
  let secs = props.counterSecs
  return (
    <div>
      <div className="timer-display">
        {mins}:{props.counterSecs <= 9 ? `0${secs}` : secs}
      </div>
      <div>{props.breakFlag ? 'Break Timer' : 'Session Timer'}</div>
    </div>
  )
}
export default TimerDisplay
