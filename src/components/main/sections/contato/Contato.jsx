import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import * as React from "react";
import emailjs from "@emailjs/browser";
import ActionAlertSuccess from "./ActionAlertSuccess";
import styles from "./Contato.module.css";
import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";

function sendEmail(formData, setShowAlert) {
	const serviceId = "service_dl01l1x";
	const templateId = "template_qkad4pd";
	const publicKey = "gRkuFsWd7f7ZQBoxq";

	const emailParams = {
		email: formData.email,
		from_name: formData.fullname,
		message: formData.mensagem,
		phone: formData.phoneNumber,
	};

	emailjs.send(serviceId, templateId, emailParams, publicKey).then(
		(response) => {
			window.alert = setShowAlert(true);
			console.log("Email Enviado", response.status, response.text);
		},
		(erro) => {
			console.log("Erro: "), erro;
		}
	);
}

export default function Contato() {
	const [showAlert, setShowAlert] = React.useState(false);

	const validationSchema = Yup.object().shape({
		fullname: Yup.string().required("Fullname is required"),
		email: Yup.string().required("Email is required").email("Email is invalid"),
		phoneNumber: Yup.string()
			.required("Phone number is required")
			.matches(/^\(\d{2}\) \d{5}-\d{4}$/, "Phone number is invalid"),
		mensagem: Yup.string().required("Message is required"),
	});

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const handlePhoneNumberChange = (event) => {
		const { value } = event.target;
		//event.target.value = formatPhoneNumber(value);
		const phoneNumber = value.replace(/\D/g, ""); // Remove all non-digit characters
		const maxLength = 15; // Total length of the mask (including parentheses, hyphen, and spaces)

		let formattedValue = "";

		if (phoneNumber.length >= 1) {
			formattedValue += `(${phoneNumber[0]}`;
		}

		if (phoneNumber.length >= 2) {
			formattedValue += phoneNumber[1];
		}

		if (phoneNumber.length >= 3) {
			formattedValue += `) ${phoneNumber[2]}`;
		}

		if (phoneNumber.length >= 4) {
			formattedValue += phoneNumber[3];
		}

		if (phoneNumber.length >= 5) {
			formattedValue += phoneNumber[4];
		}

		if (phoneNumber.length >= 6) {
			formattedValue += phoneNumber[5];
		}

		if (phoneNumber.length >= 7) {
			formattedValue += phoneNumber[6];
		}

		if (phoneNumber.length >= 8) {
			formattedValue += `-${phoneNumber[7]}`;
		}

		if (phoneNumber.length >= 9) {
			formattedValue += phoneNumber[8];
		}

		if (phoneNumber.length >= 10) {
			formattedValue += phoneNumber[9];
		}

		if (phoneNumber.length >= 11) {
			formattedValue += phoneNumber[10];
		}

		event.target.value = formattedValue.slice(0, maxLength);
	};

	const onSubmit = (data) => {
		sendEmail(data, setShowAlert);
		console.log(JSON.stringify(data, null, 2));
		reset();
	};

	return (
		<section id={"contato"}>
			<span>{showAlert && <ActionAlertSuccess />}</span>
			<div className={styles.container}>
				<TituloSubtitulo sectionName={"contato"} />
				<div className={styles.form}>
					<Box
						component="form"
						px={1}
						sx={{
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "black",
								},
							},
							"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
								borderColor: "#D4676D",
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: "#D4676D",
							},
						}}
					>
						<Grid container spacing={0.5}>
							<Grid item xs={12} sm={12}>
								<TextField
									required
									id="fullname"
									name="fullname"
									label="Full Name"
									fullWidth
									margin="dense"
									{...register("fullname")}
									error={errors.fullname ? true : false}
								/>
								<Typography variant="inherit" color="black" sx={{ marginLeft: "10px" }}>
									{errors.fullname?.message}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									required
									id="email"
									name="email"
									label="Email"
									fullWidth
									margin="dense"
									{...register("email")}
									error={errors.email ? true : false}
								/>
								<Typography variant="inherit" color="black" sx={{ marginLeft: "10px" }}>
									{errors.email?.message}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									required
									id="phoneNumber"
									name="phoneNumber"
									label="Phone Number"
									fullWidth
									margin="dense"
									placeholder="(00) 00000-0000"
									{...register("phoneNumber")}
									onChange={handlePhoneNumberChange}
									error={errors.phoneNumber ? true : false}
								/>
								<Typography variant="inherit" color="black" sx={{ marginLeft: "10px" }}>
									{errors.phoneNumber?.message}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									required
									id="mensagem"
									name="mensagem"
									label="Mensagem"
									multiline
									rows={10}
									fullWidth
									margin="dense"
									{...register("mensagem")}
									error={errors.mensagem ? true : false}
								/>
								<Typography variant="inherit" color="black" sx={{ marginLeft: "10px" }}>
									{errors.mensagem?.message}
								</Typography>
							</Grid>
						</Grid>
						<div className={styles.divButton}>
							<Box mt={2}>
								<Button
									variant="contained"
									color="primary"
									onClick={handleSubmit(onSubmit)}
									className={styles.centerButton}
									style={{ backgroundColor: "#D4676D" }}
								>
									Enviar
								</Button>
							</Box>
						</div>
					</Box>
				</div>
			</div>
		</section>
	);
}
