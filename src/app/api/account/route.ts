import { getHeadersObject } from "@/utils/api";
import { appAxios } from "@/utils/setupAxios";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const response = await appAxios.get(`user/profile`, {
      headers: getHeadersObject(headers().entries()),
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    const { data = "Something went wrong!", status = 500 } = error.response;
    return NextResponse.json(data, { status });
  }
};
