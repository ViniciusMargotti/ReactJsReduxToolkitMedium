import './App.css';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import CatalogoList from "./pages/catalogoList/catalogoList";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div className="App">
                    <CatalogoList/>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
