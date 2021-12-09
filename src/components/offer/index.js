import "./offer.css";
import placeholder from "../../images/placeholder.svg";

export default function Offer({ offer }) {
	const description = offer?.headlines?.description;
	const image = offer?.carGroupInfo?.modelExample?.imageUrl;
	const price = offer?.prices?.totalPrice?.amount?.display;
	const currency = offer?.prices?.totalPrice?.amount?.currency;

	return (
		<div className="offer">
			<div className="image">
				<img
					className="lozad"
					data-src={image}
					data-background-image={placeholder}
					alt={description}
				/>
			</div>
			<div className="description">{description}</div>
			<div className="price">
				{price} {currency}
			</div>
		</div>
	);
}
