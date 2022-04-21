
export const getImgs = async ( category) => {
      
    const url = `https://api.pexels.com/v1/search?query=${encodeURI(category)}&orientation:portrait&api_key=563492ad6f91700001000001cd67dbb509844c9585ba25ee34ce37fb`

    const respuesta = await fetch(url);

    const {photos} = await respuesta.json();

    const imgs = photos.map ( img => {
        return {
            id: img.id,
            title: img.alt,
            url: img.src.landscape
        }
    })

    return imgs;
}
