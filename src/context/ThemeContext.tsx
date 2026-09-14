import { createContext, useContext, useState, type ReactNode } from "react";

interface IThemeContext {
	isDark: boolean;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('contex error');
	}

	return context;
};

interface ThemeProveiderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProveiderProps) => {
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => {
		setIsDark(prev => !prev)
	}

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}