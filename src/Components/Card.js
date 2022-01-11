
import "./Card.css"
const Card = ()=>{
    return(
        <article className="card">
            <div className="img-container">
            <img className="image" src="https://via.placeholder.com/500" alt="Soumyadeep Mukherjee"/>
            </div>
            <div>
            <h2>The Full Moon of 2021</h2>
            <time dateTime="2018-07-07">July 7</time>
            <p className="desc">
                very Full Moon of 2021 shines in this year-spanning astrophoto project,
                 a composite portrait of the familiar lunar nearside at each brightest lunar phase. 
                 Arranged by moonth, the year progresses in stripes beginning at the top. 
                 Taken with the same camera and lens the stripes are from Full Moon images all combined at the same pixel scale. 
                 The stripes still look mismatched, but they show that the Full Moon's angular size changes throughout the year depending 
                 on its distance from Kolkata, India, planet Earth. The calendar month, a full moon name, distance in kilometers, 
                 and angular size is indicated for each stripe. Angular size is given in minutes of arc corresponding to 1/60th of a degree. 
                 The largest Full Moon is near a perigee or closest approach in May. The smallest is near an apogee, the most distant Full Moon in December. 
                 Of course the full moons of May and November also slid into Earth's shadow during 2021's two lunar eclipses.
            </p>
            </div>
        </article>
    )
}

export default Card