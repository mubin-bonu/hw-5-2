import React from "react";
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(state => ({
                time: state.time + 1
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p>Time: {this.state.time} seconds</p>
            </div>
        );
    }
}
export default Timer;