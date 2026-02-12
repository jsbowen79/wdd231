// export default async function handler(req, res) {
//     try {
//         const url = "https://data.denvergov.org/resource/3nai-9n6v.json?$limit=100&$order=reported_date%20DESC";

//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`Denver API returned ${response.status}`);
//         }

//         const data = await response.json();

//         // Allow your frontend to fetch without CORS issues
//         res.setHeader("Access-Control-Allow-Origin", "*");
//         res.status(200).json(data);
//     } catch (error) {
//         console.error("Serverless Function Error:", error);
//         res.status(500).json({ error: "Failed to fetch crime data" });
//     }
// }
  
export default async function handler(req, res) {
    try {
        const url =
            "https://data.denvergov.org/api/resource/3nai-9n6v.json?$limit=100&$order=reported_date%20DESC";

        const response = await fetch(url);

        const text = await response.text(); // capture raw response

        if (!response.ok) {
            return res.status(response.status).json({
                error: "Denver API error",
                status: response.status,
                body: text
            });
        }

        const data = JSON.parse(text);

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            error: "Serverless Function Error",
            message: error.message
        });
    }
}
  