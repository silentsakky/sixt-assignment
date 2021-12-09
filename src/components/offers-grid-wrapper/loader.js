import "./loader.css";

// CSS for this component is taken from https://projects.lukehaas.me/css-loaders/
export default function Loader() {
	return (
		<div className="load-container">
			<div className="loader"></div>
			Loading ...
		</div>
	);
}
