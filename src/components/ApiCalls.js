
export const getCharacters = async ()=> {
    const response = await fetch('https://harry-potter-api-gray.vercel.app/api/v1/characters')
    return await response.json()
}

export const getSingleCharacter = async (id)=> {
    const response = await fetch(`https://harry-potter-api-gray.vercel.app/api/v1/characters/${id}`)
    if(!response.ok) {
        throw new Error('Bad Network')
    }
    return await response.json()
}

export const sortedByHouseCall = async (house)=> {
    const res = await fetch(`https://harry-potter-api-gray.vercel.app/api/v1/characters/house/${house}`)
    if(!res.ok) {
        throw new Error('Bad Network')
    }
    return await res.json()
}

export const sortedByGroup = async (loyaltyGroup)=> {
    const res = await fetch(`https://harry-potter-api-gray.vercel.app/api/v1/characters?loyalty=${loyaltyGroup}`)
    return await res.json()
}