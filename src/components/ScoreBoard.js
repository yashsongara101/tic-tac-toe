import React from "react";

const ScoreBoard = ({score}) => {
  const {x: xScore, o: oScore} = score;

  const scoreBoardStyle = {
    border: '1px solid grey',
    padding: '8px 32px',
    borderRadius: 8
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      <p style={scoreBoardStyle}>{`❌ ${xScore}`}</p>
      <p style={scoreBoardStyle}>{`⭕ ${oScore}`}</p>
    </div>
  );
}

export default ScoreBoard;