import React from 'react'

export const ImgGridItem = ({id, title, url} ) => {

    return (
        <div className='card animate__animated animate__fadeInLeft'>
            <img className='card-img' src={url} alt={title} ></img>
            <p>{title}</p>
        </div>
    )
}
