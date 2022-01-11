import './App.css';
import Card from './Components/Card';

const HomePage=() =>{
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

export default HomePage;
