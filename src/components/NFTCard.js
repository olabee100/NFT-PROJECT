import React from 'react';
import '../index.css'

const NFTCard = ({ nft, onClick }) => {
    return (
        <div className="nft-card" onClick={onClick}>
            <img src={nft.img} alt={nft.name} />
            <h3>{nft.name}</h3>
            <p>{nft.description}</p>
        </div>
    );
};

export default NFTCard;
