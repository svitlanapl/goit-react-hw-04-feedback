import React, { Component } from "react";
import { Statistics } from "components/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Section } from "components/Section";

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onLeaveFeedback = option => {
        this.setState(state => ({
            [option]: state[option] + 1,
    }));
    }
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
    };
    
    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div className="Feedback">
                <Section title="Please leave feedback">
                    <FeedbackOptions
                    options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>
            </div>
        )
    }      
}