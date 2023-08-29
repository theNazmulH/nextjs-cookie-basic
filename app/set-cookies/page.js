"use client";

import { useState } from "react";

export default function SetCookies() {
    const [cookieName, setCookieName] = useState();
    const [cookieValue, setCookieValue] = useState();
    const [isCookie, setIsCookie] = useState(false);

    const setCookie = () => {
        (async () => {
            const requestData = {
                cookieName,
                cookieValue,
            };
            await fetch(`${process.env.API}setCookies`, {
                method: "POST",
                body: JSON.stringify(requestData),
            });
        })();
        setIsCookie(true);
    };

    const handleAddCookie = () =>{
        setIsCookie(false);
    }

let setTemplate = "";
if(isCookie===false){
    setTemplate = <div className="mt-10">
        <div className="text-center text-xl bg-gray-400 p-3 text-white">
            <h3>Set Cookies</h3>
        </div>
        <div className="border p-4 bg-gray-100">
            <div className="flex w-full gap-6">
                <div className=" w-1/2">
                    <label htmlFor="key" className="text-lg py-2 block">
                        Key
                    </label>
                    <input
                        type="text"
                        className="w-full h-10 border px-4"
                        onChange={(e) => {
                            setCookieName(e.target.value);
                        }}
                    />
                </div>
                <div className="5 w-1/2">
                    <label htmlFor="value" className="text-lg py-2 block">
                        Value
                    </label>
                    <input
                        type="text"
                        className="w-full h-10 border  px-4"
                        onChange={(e) => {
                            setCookieValue(e.target.value);
                        }}
                    />
                </div>

            </div>
            <div className="">
                <div className="mt-4 text-center">
                    <button className="py-3 px-7 bg-green-700 rounded text-white" onClick={setCookie}>
                        Set Cookie
                    </button>
                </div>
            </div>
        </div>
    </div>
}
else if(isCookie===true){
    setTemplate = <div className="text-center">
        <h3 className="text-xl text-green-500 py-3">
            <i>Cookie is set successfully</i>
        </h3>
        <div className="text-center">
            <button className="py-3 px-7 bg-indigo-950 text-white rounded" onClick={handleAddCookie}>Add more cookie</button>
        </div>
    </div>
}

    return (
        <div className="">
            {setTemplate}
        </div>
    );
}
