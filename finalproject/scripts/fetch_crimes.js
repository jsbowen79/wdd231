export async function fetchCrimeData(url) {

        
        
        
        
        try {
            const response = await fetch(url); 
            const data = await response.json(); 
            console.log(data); 
        if (!Array.isArray(data.features)) {
            console.error("ArcGIS returned unexpected payload:", data); 
        }
        return Array.isArray(data.features) ? data.features : []; 

        } catch (e) {
            console.log(e);
        console.error("Failed to Load Crime Data")
        return []; 
    }
}

