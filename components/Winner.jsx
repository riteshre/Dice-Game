import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Winner = ({show,winner,onReset}) => {
     if (!show) return null; 
  return (
      <div className="modal fade show d-block" tabIndex="-1" style={{background: "rgba(0,0,0,0.5)"}}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Game Over</h5>
          </div>
          <div className="modal-body">
            <p>{winner} wins!</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onReset}>
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winner
