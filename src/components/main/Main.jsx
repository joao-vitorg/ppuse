import Chamada from "./sections/chamada/Chamada.jsx";
import Conheca from "./sections/conheca/Conheca.jsx";
import Passos from "./sections/passos/Passos.jsx";
import Consultorios from "./sections/consultorios/Consultorios.jsx";
import Anfitriao from "./sections/anfitriao/Anfitriao.jsx";
import Depoimentos from "./sections/depoimentos/Depoimentos.jsx";
import Faq from "./sections/faq/Faq.jsx";
import Contato from "./sections/contato/Contato.jsx";

export default function Main() {
	return (
		<main>
			<Chamada />
			<Conheca />
			<Passos />
			<Consultorios />
			<Anfitriao />
			<Depoimentos />
			<Faq />
			<Contato />
		</main>
	);
}
