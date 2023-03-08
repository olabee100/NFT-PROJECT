import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css'
import { fetchNFTs } from '../actions/index';
import NFTCard from './NFTCard';
import NFTModal from './NFTModal';

const NFTGrid = () => {
    const dispatch = useDispatch();
    const { nfts, loading, error } = useSelector(state => state.nfts);
    const [selectedNFT, setSelectedNFT] = useState(null);

    const handleCardClick = (nft) => {
        setSelectedNFT(nft);
    };

    const handleModalClose = () => {
        setSelectedNFT(null);
    };

    const handlePurchaseClick = () => {
        window.location.href = selectedNFT.permalink;
    };

    const handleFetchNFTs = () => {
        const address = '0x1234567890123456789012345678901234567890';
        dispatch(fetchNFTs(address));
    };

    return (
        <div className="nft-grid">
            <button className="fetch-button" onClick={handleFetchNFTs}>Fetch NFTs</button>
            {loading && <p>Loading NFTs...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && nfts.length === 0 && <p>No NFTs found.</p>}
            {!loading && !error && nfts.length > 0 && (
                <>
                    {nfts.map(nft => (
                        <NFTCard key={nft.id} nft={nft} onClick={() => handleCardClick(nft)} />
                    ))}
                    {selectedNFT && (
                        <NFTModal
                            nft={selectedNFT}
                            onClose={handleModalClose}
                            onPurchase={handlePurchaseClick}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default NFTGrid;
