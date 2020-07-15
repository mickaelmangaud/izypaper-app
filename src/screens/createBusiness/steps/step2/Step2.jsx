import React from 'react';

export const Step2 = ({ setBusinnes }) => {
  return (
    <div>
      <h1>Je choisis mon type de société, et son nom</h1>
      <label htmlFor="nom">Le nom de ma société</label>
      <input id="nom" />
      <button>SARL</button>
      <button>SAS</button>
      <button>SCI</button>
      <button>SA</button>
      <button>Auto-entrepreneur</button>
    </div>
  )
};
