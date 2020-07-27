import React, { Component } from "react";

type ClockState = {
  time: Date;
};

type Props = {};

class Clock extends Component<Props, ClockState> {
  state = {
    time: new Date(),
  };

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentWillMount() {
    this.tick();
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    const time = this.state.time.toLocaleTimeString()
    return <p>The current time is {time}</p>;
  }
}

export default Clock;
