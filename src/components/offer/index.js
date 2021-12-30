import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./offer.css";
import placeholder from "../../images/placeholder.svg";

export default function Offer({ offer }) {
	const description = offer?.headlines?.description;
	const image = offer?.carGroupInfo?.modelExample?.imageUrl;
	const price = offer?.prices?.totalPrice?.amount?.display;
	const currency = offer?.prices?.totalPrice?.amount?.currency;

	return (
		<figure className="offer">
			<LazyLoadImage
				className="image"
				src={image}
				placeholderSrc={placeholder}
				alt={description}
				effect="blur"
			/>
			<figcaption>
				{description}
				<br />
				<span className="price">
					{price} {currency}
				</span>
			</figcaption>
		</figure>
	);
}
