
export const getCharacters = async ()=> {
    const response = await fetch('https://harry-potter-api-gray.vercel.app/api/v1/characters')
    return await response.json()
}

// export const sortedByHouseCall = async (house)=> {
//     const res = await fetch(`https://harry-potter-api-gray.vercel.app/api/v1/characters/house/${house}`)
//     return await res.json()
// }