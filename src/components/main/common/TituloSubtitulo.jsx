import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js";
import { Container, Typography } from "@mui/material";
import styles from "./TituloSubtitulo.css";

export default function TituloSubtitulo({ sectionName }) {
	return (
		<Container>
			<div style={{ padding: "40px 0" }}>
				<Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold" }}>
					{titulosDescricoes[sectionName]?.titulo}
				</Typography>
				{sectionName === "passos" && <hr className={styles.tituloSubtituloSeparador} />}
				<Typography sx={{ fontSize: 22, textAlign: "center" }}>{titulosDescricoes[sectionName]?.descricao}</Typography>
			</div>
		</Container>
	);
}
