import { BannersList } from "@/widgets/news/ui";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";

const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null);

	return (
		<section className={styles.section}>
			{data && (
				<BannersList
					banners={data.news}
					isLoading={isLoading}
				/>
			)}
		</section>
	)
};

export default LatestNews;
