// import { Component } from "react";
import React from "react";

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    };

    countGoodFeedback = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
        // console.log('клік по Good'); 
    };
    countNeutralFeedback = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };
    countBadFeedback = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };
    render() {
        return (
            <div className="Feedback">
                <h2>Please leave feedback</h2>
                <button type="button" onClick={this.countGoodFeedback}>Good</button>
                <button type="button" onClick={this.countNeutralFeedback}>Neutral</button>
                <button type="button" onClick={this.countBadFeedback}>Bad</button>
                <h2>Statistics</h2>
                <ul>
                    <li>Good:{this.state.good}</li>
                    <li>Neutral:{this.state.neutral}</li>
                    <li>Bad:{this.state.bad}</li>
                    <li>Total:{this.countTotalFeedback()}</li>
                    <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
                </ul>
            </div>
        )
    }
}
