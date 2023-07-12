import styles from "./Consultorios.module.css";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function Consultorio({ imgList, itemId, title, description, location }) {
	const [curImg, setCurImg] = useState(`../../../../consultorios/${imgList[0]}.jpg`);

	return (
		<div className={styles.container}>
			<div className={styles.galery}>
				<div className={styles.thumbnails}>
					{imgList.map((img) => (
						<img
							key={img}
							src={`../../../../consultorios/${img}.jpg`}
							onClick={() => setCurImg(`../../../../consultorios/${img}.jpg`)}
						/>
					))}
				</div>
				<div className={styles.principal}>
					<img src={curImg} />
				</div>
			</div>
			<div className={styles.description}>
				<Typography
					variant={"h4"}
					textAlign={"center"}
					margin={"30px 0"}
					fontWeight={"bold"}
					color={"#D4676D"}
					component="a"
					href={"https://ppuse.com.br/items/" + itemId}
					target={"__blanck"}
					sx={{
						fontSize: "36px",
						fontWeight: 700,
						textDecoration: "none",
						display: "block",
					}}
				>
					{title}
				</Typography>
				<Typography variant={"h5"} fontWeight={"bold"}>
					Descrição
				</Typography>
				<Typography variant={"body1"} textAlign={"justify"}>
					{description}
				</Typography>
				<Typography variant={"h5"} paddingTop={"20px"} fontWeight={"bold"} fontSize={"24px"}>
					Localização
				</Typography>
				<Typography variant={"body1"} textAlign={"justify"}>
					{location}
				</Typography>
			</div>
		</div>
	);
}
