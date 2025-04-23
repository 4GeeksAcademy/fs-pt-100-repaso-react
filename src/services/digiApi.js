const digiApi = {}

digiApi.getDigimonList = async () => {
    try {
        const resp = await fetch('https://digi-api.com/api/v1/digimon?pageSize=20');
        if (!resp.ok) throw new Error('error fetching digimon list')
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

digiApi.getDigimon = async (name) => {
    try {
        const resp = await fetch('https://digi-api.com/api/v1/digimon/' + name);
        if (!resp.ok) throw new Error('error fetching digimon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}


export default digiApi;