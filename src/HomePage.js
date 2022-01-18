import { useSelector } from 'react-redux';
import './App.css';
import Card from './Components/Card';

const HomePage=() =>{
    const state = useSelector((state)=>state?.data?.apod)

console.log("display: ",state)
  return (
    <div className="container">
    <header>
      <h1>Spacestagram</h1>
    </header>
    <main >
        {
          state ?
            Object.values(state).map((data)=>{
                return(
                    <Card data={data} key={data?.date}/>
                )
            }):""
        }
      
    </main>
    </div>
  );
}

export default HomePage;
