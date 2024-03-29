import React, { useState } from 'react'
import { AgregarCategoria } from './components/AgregarCategoria'
import { ImgGrid } from './components/ImgGrid'

export const ImagenesApp = () => {

    const [categorias, setCategorias] = useState([''])

    return (
        <>

            <div  className='fondo'> 
                <h1 className='fondo-title' >Busca las mejores imagenes</h1>
                    <h2 className='fondo-title1'>En este sitio encontraras las mejores imagenes para visualizar las cuales fueron tomadas por diversos fotografos.</h2>
                        <AgregarCategoria setCategorias = {setCategorias}/>
                        <h3 className='fondo-title2'>Busquedas populares: Messi, Mujer, Paisaje, Familia, Naturaleza</h3>
            </div>

           <ol>
               {
                   categorias.map( category => 
                       <ImgGrid
                            key = {category}
                            category = {category}
                        />
                   ) 
               }

           </ol>

           {
               categorias.length === 1 && <h3 className='no-resultados'>No hay resultados, ingrese una palabra..</h3> 
           }

        </>
    )
}
