import { useState } from "react";
import { Statistics } from "components/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Section } from "components/Section";
import { Notification } from "components/Notification";

import { FeedbackList } from './App.styled';

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = ['good', 'neutral', 'bad'];

    const onLeaveFeedback = options => {
        switch (options) {
            case 'good':
                setGood(good => good + 1);
                break;
            
            case 'neutral':
                setNeutral(neutral => neutral + 1);
                break;
            
            case 'bad':
                setBad(bad => bad + 1);
                break;
            
            default:
            return;
        };
    };
    
    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / countTotalFeedback()) * 100) || 0;
    };

    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackList>
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={onLeaveFeedback}
                    />
                </FeedbackList>
            </Section>
            <Section title="Statistics">
                {countTotalFeedback()
                    ? (<Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />)
                    : (<Notification message="No feedback given"
                    />)
                }   
            </Section>
        </div>
    )
}      
