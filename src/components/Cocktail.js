
import React from 'react';
import {Link} from 'react-router-dom';
//import pages


export default function Cocktail({image,name,id,glass,info,category}) {
  return (
    <article className="cocktail">
      <div className="img-container">
      <img src={image} alt={name} />

      </div>
      <div className="cocktail-footer">
  <h3>{name}</h3>
  <h4>{category}</h4>
  <h5>{glass}</h5>
  <p>{info}</p>
  <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">Details</Link>
        </div>
    </article>
  )
}
