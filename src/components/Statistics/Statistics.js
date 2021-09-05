import React from "react";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <h2 className={style.title}>Statistics</h2>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <ul className={style.list}>
          <li className={style.listElement}>Good: {good}</li>
          <li className={style.listElement}>Neutral: {neutral}</li>
          <li className={style.listElement}>Bad: {bad}</li>
          <li className={style.listElement}>Total: {total}</li>
          <li className={style.listElement}>Positive feedback: {positive}%</li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;