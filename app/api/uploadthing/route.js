import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";
import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
});

export async function DELETE(req) {
  const { fileKey } = await req.json();

  const utapi = new UTApi();
  const res = await utapi.deleteFiles(fileKey);
  return NextResponse.json({ msg: res });
}
