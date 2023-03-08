import {
    FETCH_NFTS_REQUEST,
    FETCH_NFTS_SUCCESS,
    FETCH_NFTS_FAILURE,
} from '../actions/index';

const initialState = {
    nfts: [],
    loading: false,
    error: null,
};

export const nftReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NFTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_NFTS_SUCCESS:
            return {
                ...state,
                nfts: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_NFTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
