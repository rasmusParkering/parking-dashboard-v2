import parkingIcon from "../images/parking-icon.svg";
import wheelchairIcon from "../images/result.svg";
import chargingIcon from "../images/fuel-icon.svg";

const FloorsItem = (props) => {
	const hidePark = props.hideParking
	if (hidePark === true) {
		return "'hide'"
	}

	return (
		<div className="floors__item">
			<h1 className="floors__number">{props.floorNumber}</h1>
			<p className="floors__titel">{props.floorName}</p>
			<div className="floors__parking-spots">
				<div className={`parking-spots__available-parking  ${props.hideParking}`}>
					<img className="parking-spots__icon" src={parkingIcon} />
					<h3 className="parking-spots__number">14</h3>
				</div>
				<div className={`parking-spots__available-parking ${props.hideDisabled}`}>
					<img className="parking-spots__icon" src={wheelchairIcon} />
					<h3 className="parking-spots__number">14</h3>
				</div>
				<div className="parking-spots__available-parking">
					<img className="parking-spots__icon" src={chargingIcon} />
					<h3 className="parking-spots__number">14</h3>
				</div>
			</div>
		</div>
	);
};

export default FloorsItem