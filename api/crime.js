export default async function handler(req, res) {
    try {
        const url = "https://data.denvergov.org/resource/3nai-9n6v.json?$limit=100&$order=reported_date%20DESC";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Denver API returned ${response.status}`);
        }

        const data = await response.json();

        // Allow your frontend to fetch without CORS issues
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (error) {
        console.error("Serverless Function Error:", error);
        res.status(500).json({ error: "Failed to fetch crime data" });
    }
}
  