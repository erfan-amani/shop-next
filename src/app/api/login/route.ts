import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const reqHeaders: any = headers().entries();

    const header: any = {};
    for (const pair of reqHeaders) {
      header[pair[0]] = pair[1];
    }

    const resHeaders: any = {};

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/auth/login`,
      body,
      { headers: header }
    );

    const { data, headers: returnedHeaders } = response || {};
    Object.keys(returnedHeaders).forEach(
      (key) => (resHeaders[key] = returnedHeaders[key])
    );

    return NextResponse.json(data, { headers: resHeaders });
  } catch (error: any) {
    const { data = "Something went wrong!", status = 500 } = error.response;
    return NextResponse.json(data, { status });
  }
};
