import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import type { IFilters } from "@/shared/interfaces";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";

interface Props {
	filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
	const { isDark } = useTheme();
	const { data } = useGetCategoriesQuery(null);

	const dispatch = useAppDispatch();

	return (
		<div className={styles.filters}>
			<Slider isDark={isDark}>
				{data ? (
					<Categories
						categories={data?.categories}
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
