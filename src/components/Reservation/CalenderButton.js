import React, { useState } from 'react';

function CalenderButton() {
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [listItems, setListItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  const handleListItemClick = (item) => {
    setSelectedItem(item);
    setShowList(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Select an item</button>
      {showList && (
        <ul>
          {listItems.map((item, index) => (
            <li key={index} onClick={() => handleListItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {selectedItem && <p>You selected {selectedItem}</p>}
    </div>
  );
}

export default CalenderButton;
