import React, { useEffect, useState } from 'react'
import { getImgs } from '../helpers/getImgs';
import { ImgGridItem } from './ImgGridItem';


export const ImgGrid = ({category}) => {

    const [imagenes, setImagenes] = useState([])

    useEffect( () => {
        getImgs( category )
            .then( imgs => setImagenes(imgs))
    },[category])

 
    return (
        <>
            <h3>{category}</h3>
                <div className='card-grid'>
                    
                        {
                            imagenes.map( img => 
                                <ImgGridItem
                                    key= {img.id} 
                                    {...img}
                                />
                            )
                        }
                    
                </div>
        </>
    )
}
