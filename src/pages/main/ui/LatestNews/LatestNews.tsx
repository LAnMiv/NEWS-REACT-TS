import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import { NewsList } from "@/widgets/news";
import type { INews } from "@/entities/news";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router";

const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const navigateTo = (news: INews) => {
		dispatch(setCurrentNews(news));
		navigate(`/news/${news.id}`)
	};

	return (
		<section className={styles.section}>
			{data && (
				<NewsList
					type="banner"
					direction="row"
					isLoading={isLoading}
					news={data.news}
					viewNewsSlot={(news: INews) => (
						<p onClick={() => navigateTo(news)}>view more...</p>
					)}
				/>
			)}
		</section>
	)
};

export default LatestNews;
