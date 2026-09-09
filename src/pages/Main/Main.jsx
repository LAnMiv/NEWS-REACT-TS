import { getNews, getCategories } from "../../api/apiNews";
import styles from "./styles.module.css";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFilters } from "../../helpers/hooks/useFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

const Main = () => {
	const { filters, changeFilter } = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: "",
	});

	const debouncedKeywords = useDebounce(filters.keywords, 1500);

	const { data, isLoading } = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords,
	});

	return (
		<main className={styles.main}>
			<LatestNews banners={data.news} isLoading={isLoading} />

			<NewsByFilters
				news={data.news}
				filters={filters}
				isLoading={isLoading}
				changeFilter={changeFilter}
			/>
		</main>
	)
};

export default Main;
