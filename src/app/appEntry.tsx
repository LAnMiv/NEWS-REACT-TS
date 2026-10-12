// import { StrictMode } from 'react'
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { store } from "./appStore";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@/shared/index.css";
import { RouterProvider } from "react-router";
import { appRouter } from "./appRouter";

createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	</ThemeProvider>




	// <StrictMode>
	//   <App />
	// </StrictMode>,
)
