import { useEffect } from "react";
import { useSelector } from "react-redux";

import lozad from "lozad";

import Offer from "../offer";
import "./grid.css";

export default function OffersGrid() {
	const offers = useSelector(({ offers }) => offers.offers);

	useEffect(() => {
		// Initialize observer for lazy loading of images
		lozad().observe();
	}, [offers]); // Dependency is required to initialize lazy images only when dom is ready with all img tags

	return (
		<div className="offers-grid">
			{offers.map(({ id, ...offer }) => (
				<Offer offer={offer} key={id} />
			))}
		</div>
	);
}
