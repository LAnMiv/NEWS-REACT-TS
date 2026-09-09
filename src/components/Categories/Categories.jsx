import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
	const containerRef = useRef(null);

	const handleWheel = (e) => {
		if (!e.shiftKey && e.deltaY !== 0) {
			e.preventDefault();
			const container = e.currentTarget;
			container.scrollLeft += e.deltaY;
		}
	};

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			container.addEventListener('wheel', handleWheel, { passive: false });
		};


		return () => {
			container.removeEventListener('wheel', handleWheel);
		};
	}, [])

	return (
		<div
			className={styles.categories}
			ref={containerRef}
		>
			<button
				onClick={() => setSelectedCategory(null)}
				className={!selectedCategory ? styles.active : styles.item}
			>
				All
			</button>
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

// import styles from "./styles.module.css";

// const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
// 	const handleWheel = (e) => {
// 		if (!e.shiftKey && e.deltaY !== 0) {
// 			e.preventDefault();
// 			const container = e.currentTarget;
// 			container.scrollLeft += e.deltaY;
// 		}
// 	};

// 	return (
// 		<div
// 			className={styles.categories}
// 			onWheel={handleWheel}
// 		>
// 			<button
// 				onClick={() => setSelectedCategory(null)}
// 				className={!selectedCategory ? styles.active : styles.item}
// 			>
// 				All
// 			</button>
// 			{categories?.map(category => {
// 				return (
// 					<button
// 						onClick={() => setSelectedCategory(category)}
// 						key={category}
// 						className={selectedCategory === category ? styles.active : styles.item}
// 					>
// 						{category}
// 					</button>
// 				)
// 			})}
// 		</div >
// 	)
// };

// export default Categories;
