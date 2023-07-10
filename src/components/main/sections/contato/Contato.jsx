import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField, Typography, Grid, Checkbox, FormControlLabel } from "@mui/material";
import * as Yup from 'yup';
import * as React from 'react';
import emailjs from "@emailjs/browser";
import styles from './Contato.module.css';
import AlertaSucesso from './AlertaSucesso.jsx';
import AlertaErro from './AlertaErro.jsx'
import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";

function sendEmail(formData, setShowAlert, setShowErrorAlert) {

    const serviceId = "service_dl01l1x";//service_dl01l1x
    const templateId = "template_qkad4pd";
    const publicKey = "gRkuFsWd7f7ZQBoxq";

    const emailParams = {
        email: formData.email,
        from_name: formData.fullname,
        message: formData.mensagem,
        phone: formData.phoneNumber
    };

    emailjs.send(serviceId, templateId, emailParams, publicKey)
        .then((response) => {
            setShowAlert(true);
            console.log("Email Enviado", response.status, response.text)
        },
            (erro) => {
                setShowErrorAlert(true);
                console.log("Erro: "), erro;
            }
        );
}


export default function Contato() {
    const [showAlert, setShowAlert] = React.useState(false);
    const [showErrorAlert, setShowErrorAlert] = React.useState(false);
    const [acceptTerms, setAcceptTerms] = React.useState(false);

    const validationSchema = Yup.object().shape({
        fullname: Yup.string()
            .required('O nome completo é obrigatório'),
        email: Yup.string()
            .required('O e-mail é obrigatório')
            .email('Email inválido'),
        phoneNumber: Yup.string()
            .required('O número de telefone é obrigatório')
            .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'O número de telefone é inválido'),
        mensagem: Yup.string()
            .required('A mensagem é obrigatória'),
        acceptTerms: Yup.bool().oneOf([true], 'Aceitar os termos é obrigatório')
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(validationSchema)
    });


    const handlePhoneNumberChange = (event) => {
        const { value } = event.target;
        const phoneNumber = value.replace(/\D/g, "");
        const maxLength = 15;

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
        sendEmail(data, setShowAlert, setShowErrorAlert);
        console.log(JSON.stringify(data, null, 2));
        reset();
        setAcceptTerms(false);   
    };


    return (
        <section>
            {showAlert && <AlertaSucesso />}
            {showErrorAlert && <AlertaErro />}
            <div className={styles.container}>
                <TituloSubtitulo sectionName={"contato"} />
                <div className={styles.form}>
                    <Box component="form" px={1} sx={{
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

                    }}>
                        <Grid container spacing={0.5}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="fullname"
                                    name="fullname"
                                    label="Nome"
                                    fullWidth
                                    margin="dense"
                                    {...register('fullname')}
                                    error={errors.fullname ? true : false}
                                />
                                <Typography variant="inherit" color="black" sx={{ marginLeft: '10px' }}>
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
                                    {...register('email')}
                                    error={errors.email ? true : false}
                                />
                                <Typography variant="inherit" color="black" sx={{ marginLeft: '10px' }}>
                                    {errors.email?.message}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Celular"
                                    fullWidth
                                    margin="dense"
                                    placeholder="(00) 00000-0000"
                                    {...register('phoneNumber')}
                                    onChange={handlePhoneNumberChange}
                                    error={errors.phoneNumber ? true : false}
                                />
                                <Typography variant="inherit" color="black" sx={{ marginLeft: '10px' }}>
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
                                    {...register('mensagem')}
                                    error={errors.mensagem ? true : false}
                                />
                                <Typography variant="inherit" color="black" sx={{ marginLeft: '10px' }}>
                                    {errors.mensagem?.message}
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Controller
                                            control={control}
                                            name="acceptTerms"
                                            defaultValue="false"
                                            inputRef={register()}
                                            render={({ field }) => (  //: { onChange }
                                                <Checkbox
                                                    {...field}
                                                    sx={{
                                                        color: 'primary', '&.Mui-checked': {
                                                            color: '#D4676D'
                                                        }
                                                    }}
                                                    checked={acceptTerms}
                                                    //onChange={e => onChange(e.target.checked)}
                                                    onChange={(e) => {
                                                        field.onChange(e.target.checked);
                                                        setAcceptTerms(e.target.checked);
                                                    }}

                                                />
                                            )}
                                        />
                                    }
                                    label={
                                        <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                                            Li e concordo com os Termos *
                                        </Typography>
                                    }
                                />
                                <br />
                                <Typography variant="inherit" color="black" sx={{ marginLeft: '10px' }}>
                                    {errors.acceptTerms
                                        ? errors.acceptTerms.message
                                        : ''}
                                </Typography>
                            </Grid>
                        </Grid>
                        <div className={styles.divButton}>
                            <Box mt={2} >
                                <button
                                    variant="contained"
                                    onClick={handleSubmit(onSubmit)}
                                    className={styles.enviarButton}
                                >
                                    Enviar
                                </button>
                            </Box>
                        </div>

                    </Box>
                </div>
            </div>
        </section>
    )
}

