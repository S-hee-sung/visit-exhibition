import React from 'react';

function ShopModal(props) {

function closeShopModal() {
  props.closeShopModal();
}
  return (
    <div className='Modal' onClick={closeShopModal}>
      <div className='modalBody' onClick={(e) => e.stopPropagation()}>
        <button id="modalClodeBtn" onClick={closeShopModal}>
          x
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default ShopModal;