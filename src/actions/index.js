export const FETCH_NFTS_REQUEST = 'FETCH_NFTS_REQUEST';
export const FETCH_NFTS_SUCCESS = 'FETCH_NFTS_SUCCESS';
export const FETCH_NFTS_FAILURE = 'FETCH_NFTS_FAILURE';

export const fetchNFTsRequest = () => ({
    type: FETCH_NFTS_REQUEST,
});

export const fetchNFTsSuccess = (nfts) => ({
    type: FETCH_NFTS_SUCCESS,
    payload: nfts,
});

export const fetchNFTsFailure = (error) => ({
    type: FETCH_NFTS_FAILURE,
    payload: error,
});

export const fetchNFTs = (address) => {
    return async (dispatch) => {
        dispatch(fetchNFTsRequest());

        try {
            const response = await fetch(`https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`);
            const data = await response.json();

            dispatch(fetchNFTsSuccess(data.assets));
        } catch (error) {
            dispatch(fetchNFTsFailure(error.message));
        }
    };
};
