import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import { useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

export default function Faq() {
	const [faqs, setFaqs] = useState([]);
	const [expanded, setExpanded] = useState(-1);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : -1);
	};

	useEffect(() => {
		fetch("https://joaopedrocardoso.github.io/faqs-ppuse/faqs.json")
			.then((file) => file.json())
			.then((conteudo) => setFaqs(conteudo.faqs));
	}, []);

	const Icon = styled(ExpandMoreIcon)(({ theme }) => ({
		color: "#d4676c94",
	}));

	return (
		<Container>
			<TituloSubtitulo sectionName={"faqs"} />
			<Box>
				{faqs.map(({ pergunta, resposta }, index) => (
					<Accordion
						key={index}
						expanded={expanded === index}
						onChange={handleChange(index)}
						sx={{
							marginBottom: "8px",
						}}
					>
						<AccordionSummary expandIcon={<Icon />}>
							<Typography sx={{ fontWeight: "bold" }}>{pergunta}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography sx={{ fontWeight: "lighter", wordBreak: "break-word" }}>{resposta}</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</Box>
		</Container>
	);
}
