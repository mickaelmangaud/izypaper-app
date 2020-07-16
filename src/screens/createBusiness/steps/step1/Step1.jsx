import React from 'react';

export const Step1 = ({ setBusinnes }) => {
  return (
    <div>
      <h1>Je choisis mon pays</h1>

      <div className="content">
      
        <div className="row1">
          <button>Cameroun</button>
        </div>
      
        <div className="row2">
          <button>Burkina Faso</button>
          <button>Bénin</button>
        </div>
      
        <div className="row3">
          <button>Togo</button>
        </div>

      </div>
    </div>
  )
};
