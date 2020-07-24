import React from 'react'

import {useParams} from 'react-router-dom';

export default function SingleCocktail() {
    console.log(useParams());
    const {id} = useParams();
    return (
        <div>
            Signle id:{id}
        </div>
    )
}
