import { useSelector } from 'react-redux';
import './App.css';
import Card from './Components/Card';

const HomePage=() =>{
    const state = useSelector((state)=>state.data)
console.log(state)
  return (
    <div className="container">
    <header>
      <h1>Spacestagram</h1>
    </header>
    <main >
        {
            Object.values(state).map((data, i)=>{
                return(
                    <Card data={data} key={i}/>
                )
            })
        }
      <Card/>
      <Card/>
    </main>
    </div>
  );
}

export default HomePage;
