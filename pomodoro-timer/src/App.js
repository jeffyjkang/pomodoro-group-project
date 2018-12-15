import React from 'react'
import ReactDOM from 'react-dom'
import TimerDisplay from './components/TimerDisplay'
import ButtonDisplay from './components/ButtonDisplay'
import SessionLength from './components/SessionLength'
import BreakLength from './components/BreakLength'
import AlertAudio from './components/AudioComponent'
import styled from 'styled-components'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			setSessionLength : 25,

			Mins             : 0,
			Secs             : 0,
			//setBreakLength: 5
			breakMins        : 5,
			// currently running?
			running          : false,
			onBreak          : false,
			audioFlag        : true,
		}
	}

	//function to set mins to setSessionLength
	//function to set breakMins to setBreakLength
	//recursive function, set interval that when you click start, sets secs to 59 after 1 sec
	//subtracts 1 from secs until it hits 0 goes back to 59
	// stops this function once state of mins is -1
	//another recursive function that subtracts 1 from mins
	//stops when mins is at -1

	//sets state of Mins to session length after first run through
	componentDidMount() {
		this.setState({ Mins: this.state.setSessionLength })
	}
	//reset function, sets state of Mins back to session Length, and secs to default 0
	reset = ev => {
		ev.preventDefault()
		console.log('i was clicked')
		if (this.state.running) {
			return
		}
		this.setState({ Mins: this.state.setSessionLength, Secs: 0 })
	}
	//toggles running flag to true or false

	pauseStart = ev => {
		ev.preventDefault()
		console.log('Pause was clicked')
		this.setState(prevState => ({
			running : !prevState.running,
		}))
		// if (this.state.running === true) {
		this.timer()
		// } else if (this.state.running === false) clearInterval(this.timer);
	}

	//sets length of session or break by target id, (event handler)
	setLength = ev => {
		ev.preventDefault()
		console.log(ev, 'setLength Event')
		if (this.state.running === false) {
			this.setState({ [ev.target.id]: ev.target.value })
		}
		else {
			alert("You've gotta, like, stop the timer before you can, you know... change things, man.")
		}
	}
	//sets state of mins to session length, (submit handler)
	submitLength = ev => {
		ev.preventDefault()
		if (!this.state.running) {
			this.setState({
				Mins    : this.state.setSessionLength,
				Secs    : 0,
				running : false,
				onBreak : false,
			})
		}
		else {
			alert("You've gotta, like, stop the timer before you can, you know... change things, man.")
		}
	}
	//sets state of mins to break length, (submit handler)
	submitBreak = ev => {
		ev.preventDefault()
		if (!this.state.running) {
			this.setState({
				Mins    : this.state.breakMins,
				Secs    : 0,
				running : false,
				onBreak : true,
			})
		}
	}
	//function that runs timer, (invoked when running flag is true, stops when false)

	// fires once when false, either in timer or timeFunc
	timer = () => {
		console.log('timer run', this.state.running)
		this.state.running ? setTimeout(this.timeFunc, 500) : clearInterval(this.timer)
	}

	timeFunc = () => {
		console.log('timeFunc fired')
		if (this.state.Mins !== 0 || this.state.Secs !== 0) {
			this.state.Secs > 0
				? this.setState({ Secs: this.state.Secs - 1 })
				: this.setState({ Secs: 59, Mins: this.state.Mins - 1 })
		}
		else if (this.state.Mins === 0 && this.state.Secs === 0) {
			this.state.onBreak
				? this.setState({
						Mins    : this.state.setSessionLength,
						onBreak : false,
						running : false,
					})
				: this.setState({
						Mins    : this.state.breakMins,
						onBreak : true,
						running : false,
					})
		}
	}

	render() {
		console.log(this.state.running, 'pauseclick state after click')
		if (this.state.running) {
			this.timer()
		}
		//works for react-player
		// if (this.state.audioFlag) {
		//   console.log(this.state.audioFlag, "state of audio flag");
		//   return <AlertAudio />;
		// }
		console.log(this.state.onBreak, 'break')
		return (
			<div className='App'>
				<h1>Pomodoro</h1>
				<TimerDisplay counterMins={this.state.Mins} counterSecs={this.state.Secs} breakFlag={this.state.onBreak} />
				<ButtonDisplay
					reset={this.reset}
					pauseStart={this.pauseStart}
					running={this.state.running}
					onBreak={this.state.onBreak}
				/>
				<SessionLength setLength={this.setLength} submitLength={this.submitLength} />
				<BreakLength setLength={this.setLength} submitBreak={this.submitBreak} />
			</div>
		)
	}
}

export default App
