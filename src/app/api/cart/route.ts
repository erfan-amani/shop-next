import { getHeadersObject } from "@/utils/api";
import { appAxios } from "@/utils/setupAxios";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type PostBody = {
  productId: string;
};

export const GET = async (req: NextRequest) => {
  try {
    const response = await appAxios.get("cart", {
      headers: getHeadersObject(headers().entries()),
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    const { data = "Something went wrong!", status = 500 } = error.response;
    return NextResponse.json(data, { status });
  }
};
export const POST = async (req: NextRequest) => {
  const body: PostBody = await req.json();
  const id = body.productId;

  try {
    const response = await appAxios.post(
      "cart",
      { productId: id },
      { headers: getHeadersObject(headers().entries()) }
    );

    revalidateTag("cart");

    return NextResponse.json(response.data);
  } catch (error: any) {
    const { data = "Something went wrong!", status = 500 } = error.response;
    return NextResponse.json(data, { status });
  }
};
export const DELETE = async (req: NextRequest) => {
  const id = req.nextUrl.searchParams.get("id");

  try {
    const response = await appAxios.delete(`cart/${id}`, {
      headers: getHeadersObject(headers().entries()),
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    const { data = "Something went wrong!", status = 500 } = error.response;
    return NextResponse.json(data, { status });
  }
};
