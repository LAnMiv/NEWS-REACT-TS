import { useTheme } from "@/app/providers/ThemeProvider";
import { themeIcons } from "@/shared/assets";

const ThemeButton = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<img
			onClick={toggleTheme}
			src={isDark ? themeIcons.light : themeIcons.dark}
			alt="theme"
			width={30} height={30} loading="lazy"
		/>
	)
};

export default ThemeButton;