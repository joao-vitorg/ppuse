import { Fragment } from "react";
import "./css/styles.css";
import Main from "./components/main/Main.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Whatsapp from "./components/tools/Whatsapp.jsx";

export default function App() {
	return (
		<Fragment>
			<Header />
			<Main />
			<Footer />
			<Whatsapp />
		</Fragment>
	);
}
