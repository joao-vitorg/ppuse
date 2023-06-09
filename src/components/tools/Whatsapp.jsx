import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
	return (
		<FloatingWhatsApp
			phoneNumber={"+5534999999999"}
			accountName={"PPUSE"}
			statusMessage={""}
			chatMessage={"Olá, seja bem vindo ao PPUSE. Como posso ajudá-lo"}
			placeholder={"Escreva uma mensagem"}
			allowEsc={true}
			allowClickAway={true}
		/>
	);
}
