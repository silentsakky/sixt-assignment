import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOffers } from "../../actions";
import OffersGrid from "../offers-grid";
import Error from "./error";
import Loader from "./loader";

export default function OffersGridWrapper() {
	const dispatch = useDispatch();
	const loading = useSelector(({ offers }) => offers.loading);
	const error = useSelector(({ offers }) => offers.error);

	useEffect(() => {
		dispatch(fetchOffers());
	}, [dispatch]);

	return loading ? (
		<Loader />
	) : error ? (
		<Error error={error} />
	) : (
		<OffersGrid />
	);
}
