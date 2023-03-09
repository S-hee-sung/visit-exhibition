
import React from 'react';

const familySite = [
  {
    id: 1,
    text: 'famliy site1'
  },
  {
    id: 2,
    text: 'famliy site2'
  },
  {
    id: 3,
    text: 'famliy site3'
  },
  {
    id: 4,
    text: 'famliy site4'
  },
]

function FooterDropDown(props) {

  return (
    <div>
      {familySite.map((family) => {
        return <li key={family.id} style={{ paddingTop: '10px' }}>{family.text}</li>
      })}
    </div>
  );
}

export default FooterDropDown;
