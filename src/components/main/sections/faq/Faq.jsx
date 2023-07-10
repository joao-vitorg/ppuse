import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import { useEffect, useState } from "react";
import { Accordion, AccordionSummary, Box, Container, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

export default function Faq() {
	const [faqs, setFaqs] = useState([]);
	const [expanded, setExpanded] = useState(-1);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : -1);
	};

	useEffect(() => {
		fetch("https://landingpage.ppuse.com.br/faqs.json")
			.then((file) => file.json())
			.then((conteudo) => setFaqs(conteudo.faqs));
	}, []);

	const Icon = styled(ExpandMoreIcon)(({ theme }) => ({
		color: "#d4676c94",
	}));

	return (
		<Container id={"faq"}>
			<div style={{ paddingBottom: "30px",  paddingTop: "50px" }}>
				<TituloSubtitulo sectionName={"faqs"} />
				<Box style={{ paddingTop: "60px" }}>
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
								{
									(expanded === index) ? 
									<Typography sx={{ fontSize: "19px", fontWeight: "bold", color: "#d33941" }}>{pergunta}</Typography>
									: <Typography sx={{ fontSize: "19px", fontWeight: "bold" }}>{pergunta}</Typography>
								}
							</AccordionSummary>
							<AccordionSummary>
								<Typography sx={{ fontSize: "18px",wordBreak: "break-word" }}>{resposta}</Typography>
							</AccordionSummary>
						</Accordion>
					))}
				</Box>
			</div>
		</Container>
	);
}
