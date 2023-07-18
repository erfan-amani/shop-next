import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { store } from "@/redux/store";
import { authSlice } from "@/redux/slices/userSlice/slice";
import { getHeadersObject, ReturedHeaders } from "@/utils/api";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/auth/login`,
      body,
      { headers: getHeadersObject(headers().entries()) }
    );

    const { data, headers: returnedHeaders } = response || {};

    const resHeaders: ReturedHeaders = {};
    Object.keys(returnedHeaders).forEach(
      (key) => (resHeaders[key] = returnedHeaders[key])
    );

    store.dispatch(authSlice.actions.setUser(data.user));

    return NextResponse.json(data, { headers: resHeaders });
  } catch (error: any) {
    const { data = "Something went wrong!", status = 500 } = error.response;
    return NextResponse.json(data, { status });
  }
};
