import React, { Component, PropTypes } from 'react';
import './App.css';

const Slot = ({ index, position }) => (
  <div className="reel">
    <div className={`slot-${index} position-${position}`} />
  </div>
);

Slot.propTypes = {
  index: PropTypes.number,
  position: PropTypes.number,
};

const Reels = ({ positions }) => (
  <div className="reels">
    <Slot index={1} position={positions[0]} />
    <Slot index={2} position={positions[1]} />
    <Slot index={3} position={positions[2]} />
  </div>
);

Reels.propTypes = {
  positions: PropTypes.array,
};

const SpinButton = ({ handler }) => (
  <div className="spin-button">
    <button onClick={() => handler()}>Spin Reels</button>
  </div>
);

SpinButton.propTypes = {
  handler: PropTypes.func,
};

const Message = ({ win, winClass, winImage }) => (
  <div className={winClass}>
    <span>{win}</span>
    <div>{winImage}</div>
  </div>
);

Message.propTypes = {
  win: PropTypes.string,
  winClass: PropTypes.string,
  winImage: PropTypes.string,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: [],
    }

    this.randPositionValue = this.randPositionValue.bind(this);
    this.randState = this.randState.bind(this);
    this.spinReels = this.spinReels.bind(this);
  }

  randPositionValue() {
    return Math.floor(Math.random() * 3);
  }

  randState() {
    return [
      this.randPositionValue(),
      this.randPositionValue(),
      this.randPositionValue(),
    ];
  }

  spinReels() {
    let count = 0;
    let currentState = this.randState();
    const finalState = this.randState();

    const spin = () => {
      let nextState = currentState;
      let hasChanged = false;

      for (let i = 0; i < 3; i++) {
        if (count < 9 || currentState[i] !== finalState[i]) {
          nextState[i] = (currentState[i] + 1) % 3;
          hasChanged = true;
          console.log('spinning');
        }

        if (count >= 9) {
          console.log('stop spinning');
        }
      }

      this.setState({
        positions: nextState,
        isFinal: !hasChanged,
      });

      if (!hasChanged) {
        return;
      }

      currentState = this.state.positions;
      setTimeout(spin, 100);
      count++;
    }

    spin();
  }

  componentDidMount() {
    this.setState({ positions: this.randState() });
  }

  render() {
    const pos = this.state.positions;
    const isWin = (pos[0] === pos[1]) && (pos[1] === pos[2]);

    let win = '';
    let winClass = '';
    let winImage = '';

    if (isWin && this.state.isFinal) {
      win = ['You won a cup of coffee', 'You won a cup of tea', 'You won an espresso'][pos[0]];
      winClass = ['coffee', 'tea', 'espresso'][pos[0]];
      winImage = [<div className="coffee-img" />, <div className="tea-img" />, <div className="espresso-img"/>][pos[0]];
    }
    return (
      <div className="App">
        <section className="machine">
          <Reels positions={this.state.positions} />
          <SpinButton handler={this.spinReels} />
          <Message win={win} winClass={winClass} winImage={winImage} />
        </section>
      </div>
    );
  }
}

export default App;
