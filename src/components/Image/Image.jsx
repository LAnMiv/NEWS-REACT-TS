import styles from "./styles.module.css";

const Image = ({ image }) => {
	return (
		<div className={styles.wrapper}>
			{image ? (
				<img
					className={styles.image}
					src={image}
					alt="news"
					width="100" height="100" loading="lazy"
				/>
			) : null}
		</div>
	)
};

export default Image;
