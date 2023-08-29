"use client";

import { useState } from "react";
import AllCookies from "@/app/components/AllCookies";

export default function ReadingCookies() {
    const [cookieName, setCookieName] = useState();
    const [cookieData, setCookieData] = useState([]);


    const getCookie = async () => {
        try {
            const requestData = {
                name: cookieName,
            };

            const response = await fetch(`${process.env.API}getCookies`, {
                method: "POST",
                body: JSON.stringify(requestData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });


            if (!response.ok) {
                throw new Error(`Failed to fetch cookies. Status: ${response.status}`);
            }

            const cookieList = await response.json();
            await setCookieData(cookieList.cookieData);
        } catch (error) {
            console.error("Error fetching cookies:", error);
        }
    };
    const getAllCookies = () => {
        (async () => {
            const response = await fetch(`${process.env.API}getCookies `);
            const cookieList = await response.json();
            setCookieData(cookieList.cookieList);
        })();
    };
    let response = "";
if(cookieData.length === 0){
    response = <div className="bg-red-700 text-white text-lg p-4 rounded mt-4">No cookie found</div>
}
else {
    response = <div className="all-cookies bg-gray-600 p-4 mt-10 rounded text-white">
        <div className="">
            <div className="">
                <table className="w-full text-left">
                    <thead>
                    <tr className="border">
                        <th className="p-2 border text-green-300">Key</th>
                        <th className="p-2 border text-green-300">Value</th>
                        <th className="p-2 border text-green-300">Path</th>
                    </tr>
                    </thead>
                    <tbody>
                    <AllCookies cookieData={cookieData} />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

    return (
        <div className="get-cookies">
            <div className="single-cookie">
                <div className="text-center text-xl bg-gray-400 p-3 text-white">
                    <h3>Get Cookies</h3>
                </div>
                <div className="border p-4 bg-gray-100">
                    <div className="">
                        <div className="flex w-full items-end gap-4 mb-10">
                            <div className="w-2/3">
                                <label htmlFor="key" className="text-lg py-2 block">
                                    Do you want to get a cookie?
                                </label>
                                <input
                                    placeholder="Enter key to get cookie value"

                                    type="text"
                                    className="w-full h-12 border px-4"
                                    onChange={(e) => {
                                        setCookieName(e.target.value);
                                    }}
                                />
                            </div>
                            <div>
                                <button className="py-3 px-7 bg-green-700 rounded text-white" onClick={getCookie}>
                                    Get Cookie
                                </button>
                            </div>
                        </div>
                        <hr/>
                        <div className="mt-10">
                            <p className="mb-3 text-lg">Do you want to get all the cookies?</p>
                            <button
                                className="py-3 px-7 bg-green-700 rounded text-white"
                                onClick={getAllCookies}>
                                Get All Cookies
                            </button>
                        </div>


                    </div>

                </div>
            </div>
            {response}
        </div>
    );
}
