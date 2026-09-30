import withSkeleton from "@/shared/hocs/withSkeleton";
import { NewsBanner, type INews } from "@/entities/news";
import styles from "./styles.module.css";

interface Props {
	banners?: INews[];
}

const BannersList = ({ banners }: Props) => {
	return (
		<ul className={styles.banners}>
			{banners?.map((banner) => {
				return (
					<NewsBanner key={banner.id} item={banner} />
				)
			})}
		</ul>
	)
};

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, "banner", 5, "row")

export default BannersListWithSkeleton;
