import { useSelector } from "react-redux";

import Offer from "../offer";
import "./grid.css";

export default function OffersGrid() {
	const offers = useSelector(({ offers }) => offers.offers);

	return (
		<div className="offers-grid">
			{offers.map(({ id, ...offer }) => (
				<Offer offer={offer} key={id} />
			))}
		</div>
	);
}
