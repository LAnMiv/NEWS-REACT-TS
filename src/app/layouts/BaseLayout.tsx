import { Header } from "@/widgets/header/ui";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Outlet } from "react-router";

function BaseLayout() {
	const { isDark } = useTheme();

	return (
		<div className={`app ${isDark ? "dark" : "light"}`}>
			<Header />
			<div className="container">
				<Outlet />
			</div>
		</div>
	)
}

export default BaseLayout;