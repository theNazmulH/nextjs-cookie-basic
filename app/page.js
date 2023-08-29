import getJsonResponse from "@/app/lib/getJsonResponse";

export default async function Home() {
  const data = await getJsonResponse();
  return (
          <div className="home">
              <div className="bg-gray-700 p-4 rounded text-center">
                <h3 className="text-white text-2xl">JSON Response</h3>
              </div>
              <div className="mt-6 border p-4 text-xl">
                <h4>{data.message}</h4>
                <h4>Version: {data.version}</h4>
              </div>
          </div>
  );
}
