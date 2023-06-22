import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js";
import { Box, Typography } from "@mui/material";

export default function TituloSubtitulo({ sectionName }) {
	return (
		<Box>
			<Typography variant="h3">{titulosDescricoes[sectionName]?.titulo}</Typography>
			<Typography variant="subtitle">{titulosDescricoes[sectionName]?.descricao}</Typography>
		</Box>
	);
}
