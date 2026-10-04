import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import type { IFilters } from "@/shared/interfaces";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import type { CategoriesType } from "@/entities/category";

interface Props {
	filters: IFilters;
	categories: CategoriesType[];
}

const NewsFilters = ({ filters, categories }: Props) => {
	const { isDark } = useTheme();

	const dispatch = useAppDispatch();

	return (
		<div className={styles.filters}>
			<Slider isDark={isDark}>
				{categories ? (
					<Categories
						categories={categories}
						selectedCategory={filters.category}
						setSelectedCategory={(category) =>
							dispatch(setFilters({ key: "category", value: category }))
						}
					/>
				) : (
					<div></div>
				)}
			</Slider>

			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) =>
					dispatch(setFilters({ key: "keywords", value: keywords }))
				}
			/>
		</div>
	)
};

export default NewsFilters;
