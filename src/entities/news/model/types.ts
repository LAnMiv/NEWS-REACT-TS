import type { CategoriesType } from "@/entities/category";

export interface INews {
	author: string;
	category: CategoriesType[];
	id: string;
	image: string;
	language: string;
	published: string;
	title: string;
	url: string;
}

export interface NewsApiResponse {
	news: INews[];
	page: Number;
	status: string
}