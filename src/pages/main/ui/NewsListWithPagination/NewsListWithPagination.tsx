import { TOTAL_PAGES } from "@/shared/constants/constants";
import { Pagination } from "@/features/pagination";
import { NewsList } from "@/widgets/news";
import type { IFilters } from "@/shared/interfaces";
import type { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
	isLoading: boolean;
	filters: IFilters;
	news: INews[];
}

const NewsListWithPagination = ({ isLoading, filters, news }: Props) => {
	const { handleNextPage, handlePreviousPage, handlePageClick } = usePaginationNews(filters);

	return (
		<Pagination
			top
			bottom
			totalPages={TOTAL_PAGES}
			currentPage={filters.page_number}
			handleNextPage={handleNextPage}
			handlePreviousPage={handlePreviousPage}
			handlePageClick={handlePageClick}
		>
			{news && (
				<NewsList
					type="item"
					direction="column"
					isLoading={isLoading}
					news={news}
				/>
			)}
		</Pagination>
	)
};

export default NewsListWithPagination;
