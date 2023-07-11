import styles from "./Consultorios.module.css";
import { useState } from "react";

export default function Consultorio({ imgList, itemId }) {
	const [curImg, setCurImg] = useState(`../../../../consultorios/${imgList[0]}.jpg`);

	return (
		<div className={styles.container}>
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
				<a href={"https://ppuse.com.br/items/" + itemId} target={"__blanck"}>
					<img src={curImg} />
				</a>
			</div>
		</div>
	);
}
