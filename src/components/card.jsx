import { Link } from "react-router-dom"

export const Card = (props) => {


    return (
        <article className="col-lg-6 col-md-4 col-lg-3">
            <div className="card">
                <h3 className="title">{props.name}</h3>
                <img className="img-fluid" src={props.image} alt="" />
                <Link className="btn btn-primary" to={'/details/' + props.name}>Learn more</Link>
            </div>
        </article>
    )
}