import './App.css';
import Card from './Components/Card';
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    
    <div className="container">
    <header>
      <h1>Spacestagram</h1>
    </header>
    <main >
      <Card/>
      <Card/>
    </main>
    </div>
  );
}

const AppWrapped = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}

export default AppWrapped;
