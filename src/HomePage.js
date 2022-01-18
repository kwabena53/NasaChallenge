import { useSelector } from 'react-redux';
import './App.css';
import Card from './Components/Card';
import SkeletonLoader from './Components/SkeletonLoader';

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
          undefined ?
            Object.values(state).map((data)=>{
                return(
                    <Card data={data} key={data?.date}/>
                )
            }): 
            
            <div>
              <SkeletonLoader num={5}/>
            </div>
        }
    </main>
    </div>
  );
}

export default HomePage;
