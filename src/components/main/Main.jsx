import Chamada from "./section_chamada/Chamada.jsx";
import Conheca from "./section_conheca/Conheca.jsx";
import Passos from "./section_passos/Passos.jsx";
import Consultorios from "./section_consultorios/Consultorios.jsx";
import Anfitriao from "./section_anfitriao/Anfitriao.jsx";
import Depoimentos from "./section_depoimentos/Depoimentos.jsx";
import Faq from "./section_faq/Faq.jsx";
import Contato from "./section_contato/Contato.jsx";

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
