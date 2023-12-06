import React from "react";

const GameBoard = ({playTurn}) => {

  const play = (event) => {
    playTurn(event.target);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'yellow',
      padding: 24,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        backgroundColor: 'red'
      }}
      onClick={play}>
        <div style={{
          display: "flex",
          flexDirection: 'row',
          gap: 8
        }}>
          <div id="00" style={{
            height: 72,
            aspectRatio: 1,
            backgroundColor: "yellow",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            
          </div>
          <div id="01" style={{
            height: 72,
            aspectRatio: 1,
            backgroundColor: "yellow",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

          </div>
          <div id="02" style={{
            height: 72,
            aspectRatio: 1,
            backgroundColor: "yellow",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

          </div>
        </div>
        <div style={{
          display: "flex",
          flexDirection: 'row',
          gap: 8
        }}>
          <div id="10" style={{
            height: 72,
            aspectRatio: 1,
            backgroundColor: "yellow",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

          </div>
          <div id="11" style={{
            height: 72,
            aspectRatio: 1,
            backgroundColor: "yellow",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

          </div>
          <div id="12" style={{
            height: 72,
            aspectRatio: 1,
            backgroundColor: "yellow",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

          </div>
        </div>
        <div style={{
          display: "flex",
          flexDirection: 'row',
          gap: 8
        }}>
          <div id="20" style={{
            height: 72,
            aspectRatio: 1,
            backgroundColor: "yellow",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

          </div>
          <div id="21" style={{
            height: 72,
            aspectRatio: 1,
            backgroundColor: "yellow",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

          </div>
          <div id="22" style={{
            height: 72,
            aspectRatio: 1,
            backgroundColor: "yellow",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;