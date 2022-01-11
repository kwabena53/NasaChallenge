
import "./Card.css"
const Card = ({data})=>{
    const dt = new Date(data?.date)
    return(
        <article className="card">
            <div className="img-container">
            <img className="image" src={data?.hdurl} alt="Soumyadeep Mukherjee"/>
            </div>
            <div>
            <h2>{data?.title}</h2>
            <time dateTime={data?.date}>{dt?.toDateString()}</time>
            <p className="desc">
                {data?.explanation}
            </p>
            </div>
        </article>
    )
}

export default Card