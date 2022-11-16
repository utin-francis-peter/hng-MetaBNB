import React from "react";
import { useState } from "react";

const ConnectWalletModal = ({ handleModalToggle }) => {
  return (
    <div className="connect__wallet__modal-wrapper">
      <div className="connect__wallet__modal">
        <div className="modal__header d-flex-between">
          <h4>Connect Wallet</h4>
          <button onClick={() => handleModalToggle()}>
            <i className="fa-solid fa-xmark fs-6"></i>
          </button>
        </div>

        <div className="modal__main">
          <p className="mt-2">Choose your preferred wallet</p>
          <button className="d-flex-between">
            <img src="./assets/images/chains/metamask-colored.png" alt="" />
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <button className="d-flex-between p-3">
            <img src="./assets/images/chains/walletconnect.png" alt="" />
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
