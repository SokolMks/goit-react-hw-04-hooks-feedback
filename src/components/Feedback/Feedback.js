import React from "react";
import PropTypes from "prop-types";
import style from "./Feedback.module.css" ;

const Feedback = ({ onClickLike, onClickNeutral, onClickBad }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Please leave feedback!</h2>
      <ul className={style.list}>
        <li className={style.listElement}>
          <button className={style.btnList && style.btnGood} onClick={onClickLike}>Good</button>
        </li>
        <li className={style.listElement}>
          <button className={style.btnList && style.btnNeutral} onClick={onClickNeutral}>Neutral</button>
        </li>
        <li className={style.listElement}>
          <button className={style.btnList && style.btnBad} onClick={onClickBad}>Bad</button>
        </li>
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  onClickLike: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};

export default Feedback;