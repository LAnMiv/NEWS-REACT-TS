export interface IPaginationProps {
	totalPages: number;
	currentPage: number;
	handleNextPage: () => void;
	handlePreviousPage: () => void;
	handlePageClick: (pageNumber: number) => void;
}
