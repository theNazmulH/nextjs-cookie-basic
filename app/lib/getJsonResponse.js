export default async function getJsonResponse() {
    const response = await fetch(`${process.env.API}home`);
    if (!response.ok) {
        throw new Error("Error fetching data");
    }
    return response.json();
}
