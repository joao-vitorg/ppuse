import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: "Circular, Roboto",
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
				  font-family: "Circular";
				  src: url("./fonts/lineto-circular-pro-book.eot?#iefix") format("embedded-opentype"),
				       url("./fonts/lineto-circular-pro-book.woff") format("woff"),
				       url("./fonts/lineto-circular-pro-book.ttf") format("truetype"),
				}
      `,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>
);
