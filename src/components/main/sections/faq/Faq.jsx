import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import { useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
	const [faq, setFaq] = useState([]);
	const [expanded, setExpanded] = useState(-1);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : -1);
	};

	useEffect(() => {
		fetch("https://wilton-filho.github.io/PFJS-GitHub/React/projeto/json/faq2.json")
			.then((value) => value.json())
			.then((value) => {
				console.log(value.faqs);
				setFaq(value.faqs);
			});
	}, []);

	return (
		<section>
			<TituloSubtitulo sectionName={"faqs"} />
			<Box>
				{faq.map((value, index) => {
					return (
						<Accordion expanded={expanded === index} onChange={handleChange(index)}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
								<Typography>{value["pergunta"]}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{value["resposta"]}</Typography>
							</AccordionDetails>
						</Accordion>
					);
				})}
			</Box>
		</section>
	);
}
