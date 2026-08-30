import { getNews, getCategories } from "../../api/apiNews";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFilters } from "../../helpers/hooks/useFilters";

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

	const { data: dataCategories } = useFetch(getCategories);

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilter("page_number", filters.page_number + 1);
		}
	};

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilter("page_number", filters.page_number - 1);
		}
	};

	const handlePageClick = (pageNumber) => {
		changeFilter("page_number", pageNumber);
	};

	return (
		<main className={styles.main}>
			<Categories
				categories={dataCategories?.categories || []}
				selectedCategory={filters.category}
				setSelectedCategory={(category) => changeFilter("category", category)}
			/>

			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) => changeFilter("keywords", keywords)}
			/>

			<NewsBanner
				isLoading={isLoading}
				item={data?.news?.[0] || null}
			/>

			<Pagination
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
			/>

			<NewsList isLoading={isLoading} news={data?.news || []} />

			<Pagination
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
			/>
		</main>
	)
};

export default Main;
