export async function fetchCrimeData(recordCount) {
    const url =
        "https://data.denvergov.org/resource/3nai-9n6v.json?$limit=100&$order=reported_date DESC"
    ;
  
  
       
        
    try {
        async function test() {
            const url = "https://data.denvergov.org/resource/3nai-9n6v.json?$limit=5";

            const response = await fetch(url);
            const data = await response.json();

            console.log(data);
        }

        test();
          
      
        // if (!response.ok) {
        //     throw new Error("Network Response Failed"); 
        // }

        // const data = await response.json(); 
        // console.log(data); 
        // if (!Array.isArray(data.features)) {
        //     console.error("ArcGIS returned unexpected payload:", data); 
        // }
        // return Array.isArray(data.features) ? data.features : []; 

    } catch (error) {
        console.error("Failed to Load Crime Data")
        return []; 
    }
}


