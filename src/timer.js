import React from 'react';
import './style.css'

var interval;

class Timer extends React.Component{
  constructor(){
    super();
    this.state = {
      hour : 0,
      min: 0,
      sec: 0,
      isStart:false,
    }
  }

  startInterval = ()=>{
    if(this.state.isStart === false){
      this.setState({
        isStart: true
      })
      interval = setInterval(()=>{
        this.setState({
          sec: this.state.sec + 1
        })
        if(this.state.sec === 59){
          this.setState({
            sec: 0,
            min:this.state.min +1
          })
        }
        if(this.state.min === 59){
          this.setState({
            mime: 0,
            hour:this.state.hour +1
          })
        }
      } , 1000)
    }
  }

  stopInterval = ()=>{
    clearInterval(interval);
    this.setState({
      isStart: false
    })
  }

  resetInterval = ()=>{
    this.stopInterval();
    this.setState({
      hour : 0,
      min: 0,
      sec: 0,
    })
  }

  render(){
    let h = this.state.hour
    let m = this.state.min
    let s = this.state.sec
    return(
      <div>
        <h2 className="timer">
          {`${h > 9 ? h : "0"+h} : ${m > 9 ? m :"0"+m} : ${s > 9 ? s : "0"+s }`}
        </h2>
        <span className='btn btn-green' onClick={this.startInterval}>start</span>
        <span className='btn btn-red' onClick={this.stopInterval}>stope</span>
        <span className='btn btn-light' onClick={this.resetInterval}>reset</span>
      </div>
    )
  }
}

export default Timer;