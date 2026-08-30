import styles from "./styles.module.css";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
	const handleWheel = (e) => {
		if (!e.shiftKey && e.deltaY !== 0) {
			e.preventDefault();
			const container = e.currentTarget;
			container.scrollLeft += e.deltaY;
		}
	};

	return (
		<div
			className={styles.categories}
			onWheel={handleWheel}
		>
			{categories?.map(category => {
				return (
					<button
						onClick={() => setSelectedCategory(category)}
						key={category}
						className={selectedCategory === category ? styles.active : styles.item}
					>
						{category}
					</button>
				)
			})}
		</div >
	)
};

export default Categories;
