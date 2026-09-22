import { forwardRef, useEffect, type ForwardedRef } from "react";
import styles from "./styles.module.css";
import type { CategoriesType } from "../../interfaces";

interface Props {
	categories: CategoriesType[];
	selectedCategory: CategoriesType | null | undefined;
	setSelectedCategory: (category: CategoriesType | null) => void;
}

const Categories = forwardRef(({ categories, selectedCategory, setSelectedCategory }: Props, ref: ForwardedRef<HTMLDivElement>) => {
	const handleWheel = (e: WheelEvent) => {
		if (!e.shiftKey && e.deltaY !== 0) {
			e.preventDefault();
			const container = e.currentTarget as HTMLDivElement;
			container.scrollLeft += e.deltaY;
		}
	};

	useEffect(() => {
		const el = ref && typeof ref === "object" ? ref.current : null;
		if (el) {
			el.addEventListener('wheel', handleWheel, { passive: false });
			return () => el.removeEventListener('wheel', handleWheel);
		}
	}, [ref]);


	return (
		<div
			className={styles.categories}
			ref={ref}
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
	);
});

Categories.displayName = "Categories";

export default Categories;