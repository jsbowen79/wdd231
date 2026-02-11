export default async function handler(req, res) {
    try {
        const response = await fetch(
            "https://data.denvergov.org/resource/3nai-9n6v.json?$limit=100&$order=reported_date%20DESC"
        );

        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (error) {
        console.error(error);      // <-- add this to see errors in Vercel logs
        res.status(500).json({ error: "Failed to fetch crime data" });
    }
}
  