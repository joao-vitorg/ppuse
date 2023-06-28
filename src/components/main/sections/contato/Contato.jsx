import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import { Container, Stack, TextField } from "@mui/material";

export default function Contato() {
	return (
		<Container>
			<TituloSubtitulo sectionName={"contato"} />
			<Stack display={"flex"} gap={"1rem"} marginTop={"1rem"} sx>
				<TextField label="Nome" variant="outlined" />
				<TextField label="Telefone" variant="outlined" />
				<TextField label="Email" variant="outlined" />
				<TextField label="Mensagem" multiline rows={3} />
			</Stack>
		</Container>
	);
}
