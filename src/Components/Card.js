
import "./Card.css"
import { LikeIcon } from "./Icons"

const DisplayMedia = ({data})=>{
    if(data?.media_type === "image"){
        return (
            <img className="media" src={data?.hdurl} alt={data?.title}/>
        )
    }else{
        return(
    <iframe className="media" title={data.title} src={data.url}>
    </iframe>
        )
    }
}

const Card = ({data})=>{
    const dt = new Date(data?.date)
    return(
        <article className="card">
            <div className="img-container">
                <DisplayMedia data={data}/>
            </div>
            <div>
            <h2>{data?.title}</h2>
            <time dateTime={data?.date}>{dt?.toDateString()}</time>
            <p className="desc">
                {data?.explanation}
            </p>
            </div>
            <button className="btn"> <LikeIcon width="1.2em" height="auto"/> unlike</button>
        </article>
    )
}

export default Card