import React from 'react';

function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(true);

  const handleConfirm = () => {
    setIsConfirmed(isConfirmed => !isConfirmed);
  };



  return (
    <button onClick={handleConfirm} disabled={!isConfirmed}>
      {isConfirmed ? '확인하기🙄' : '확인됨😉'}
    </button>
  );
}


export default ConfirmButton;