import { appAxios } from "@/utils/setupAxios";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const reqHeaders: any = headers().entries();

    const header: any = {};
    for (const pair of reqHeaders) {
      header[pair[0]] = pair[1];
    }

    const response = await appAxios.get(`user/profile`, {
      headers: header,
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    const { data = "Something went wrong!", status = 500 } = error.response;
    return NextResponse.json(data, { status });
  }
};
