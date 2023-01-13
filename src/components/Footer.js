import Oparko from "../images/Oparko-Logo.svg";

const Footer = (props) => {
	return (
		<footer className="footer">
			<h4 className="footer__text">
				Husk altid at starte din parkering i app eller ved brug af QR-kode.
			</h4>
			<div>
				<img className="footer__image" src={Oparko} alt="Oparko - Parkeringssystemer til erhverv"/>
			</div>
		</footer>
	);
};

export default Footer;
