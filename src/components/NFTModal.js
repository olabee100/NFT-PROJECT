import React from 'react';
import '../index.css'
const NFTModal = ({ nft, onClose, onPurchase }) => {
    return (
        <div className="nft-modal">
            <div className="nft-modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <img src={nft.image_url} alt={nft.name} />
                <h2>{nft.name}</h2>
                <p>{nft.description}</p>
                <p>Owner: {nft.owner.address}</p>
                <button className="purchase-button" onClick={onPurchase}>
                    Purchase on OpenSea
                </button>
            </div>
        </div>
    );
};

export default NFTModal;
