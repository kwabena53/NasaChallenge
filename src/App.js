import './App.css';
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from './HomePage';



const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomePage />
      </PersistGate>
    </Provider>
  )
}

export default App;
