import {
	RECEIVE_OFFERS_FAILURE,
	RECEIVE_OFFERS_SUCCESS,
	REQUEST_OFFERS,
} from "../actions";

const initialState = {
	loading: false,
	error: null,
	offers: [],
};

const offers = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_OFFERS:
			return {
				...state,
				loading: true,
			};
		case RECEIVE_OFFERS_SUCCESS:
			return {
				...state,
				loading: false,
				offers: action.payload.offers,
			};
		case RECEIVE_OFFERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};
		default:
			return state;
	}
};

export default offers;
