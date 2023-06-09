import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js";
import { Container, Typography } from "@mui/material";

export default function TituloSubtitulo({ sectionName }) {
	return (
		<Container>
			<Typography variant="h3">{titulosDescricoes[sectionName]?.titulo}</Typography>
			<Typography variant="subtitle">{titulosDescricoes[sectionName]?.descricao}</Typography>
		</Container>
	);
}
