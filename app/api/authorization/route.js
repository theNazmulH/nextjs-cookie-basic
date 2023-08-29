import {headers} from "next/headers";
import {NextResponse} from "next/server";

export  async function GET(req, res){
    let headerList = headers();
    let Authorization = headerList.get("Authorization");
    return NextResponse.json({
        msg: Authorization
    })
}