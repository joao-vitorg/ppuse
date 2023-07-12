import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./styles.css";

export default function Whatsapp() {
	return (
		<div className="a">
			<FloatingWhatsApp
				phoneNumber={"+5534991739286"}
				accountName={"PPUSE"}
				statusMessage={""}
				chatMessage={"Olá, seja bem vindo ao PPUSE. Como posso ajudá-lo"}
				placeholder={"Escreva uma mensagem"}
				allowEsc={true}
				allowClickAway={true}
				avatar={"../../logo_chamada.png"}
			/>
		</div>
	);
}
