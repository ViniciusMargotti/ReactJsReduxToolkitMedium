import React from 'react';
import './App.css';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import MovieList from "./pages/movies/movieList";
import 'react-spring-bottom-sheet/dist/style.css'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Ubuntu-Regular',
            'Ubuntu',
            'BlinkMacSystemFont',
            'Arial',
            'sans-serif',
        ].join(','),
    },
})

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <div className="App">
                        <MovieList/>
                    </div>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
