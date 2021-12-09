export const REQUEST_OFFERS = "REQUEST_OFFERS";
export const RECEIVE_OFFERS_SUCCESS = "RECEIVE_OFFERS_SUCCESS";
export const RECEIVE_OFFERS_FAILURE = "RECEIVE_OFFERS_FAILURE";
export const API = "/codingtask/offers.json";

export const requestOffers = () => ({
	type: REQUEST_OFFERS,
});

export const receiveOffersSuccess = (offers) => ({
	type: RECEIVE_OFFERS_SUCCESS,
	payload: offers,
});

export const receiveOffersFailure = (error) => ({
	type: RECEIVE_OFFERS_FAILURE,
	payload: error,
});

export const fetchOffers = () => (dispatch) => {
	// Set loading state to true
	dispatch(requestOffers());

	// Get data from API
	return fetch(API)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Something went wrong !!!");
			}
		})
		.then((json) => dispatch(receiveOffersSuccess(json)))
		.catch((error) => dispatch(receiveOffersFailure(error)));
};
