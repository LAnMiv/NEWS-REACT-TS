import Skeleton from "../../components/Skeleton/Skeleton"

function withSkeleton(Component, type, count, direction) {
	return function WithSkeleton(props) {
		const { isLoadig, ...restProps } = props;

		if (isLoadig) {
			return <Skeleton type={type} count={count} direction={direction} />
		}

		return <Component {...restProps} />;
	};
};

export default withSkeleton;