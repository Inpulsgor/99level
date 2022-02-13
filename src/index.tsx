import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import reportWebVitals from './reportWebVitals';
import theme from "./common/styles/theme";
import store from 'redux/store';
import App from './App';
import './index.css';

ReactDOM.render(
  <StrictMode>
		<ThemeProvider theme={theme}>
		<CssBaseline />
		<Provider store={store.store}>
			<BrowserRouter>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</BrowserRouter>
		</Provider>
		</ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
