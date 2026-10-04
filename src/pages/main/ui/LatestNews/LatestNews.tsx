import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import { NewsList } from "@/widgets/news";

const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null);

	return (
		<section className={styles.section}>
			{data && (
				<NewsList
					type="banner"
					direction="row"
					isLoading={isLoading}
					news={data.news}
				/>
			)}
		</section>
	)
};

export default LatestNews;
