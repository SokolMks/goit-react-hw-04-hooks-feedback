import React from "react";
import Section from "./components/Section/Section";
import Feedback from "./components/Feedback/Feedback";
import Statistics from "./components/Statistics/Statistics";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  onClickLike = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();


    this.countPositiveFeedbackPercentage();
  };

  // onButtonClick = (e) => {
  //   this.setState(prevState => ({
  //     [e.target.textContent.toLowerCase()]: prevState[e.target.textContent.toLowerCase()] + 1,
  //   }))};
  

  onClickNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();

    if (this.state.good >= 1) {
      this.countPositiveFeedbackPercentage();
    }
  };

  onClickBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();

    if (this.state.good >= 1) {
      this.countPositiveFeedbackPercentage();
    }
  };

  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => ({
      positive: (prevState.good / prevState.total) * 100,
    }));
  };

  render() {
    return (
      <Section>
        <Feedback
          onClickLike={this.onClickLike}
          onClickNeutral={this.onClickNeutral}
          onClickBad={this.onClickBad}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positive={this.state.positive}
        />
      </Section>
    );
  }
}

export default App;