import { Hono } from "hono";
import type { APIRoute } from "astro";
import { getRuntimeKey } from "hono/adapter";

const app = new Hono().basePath("/api/");

app.get("hello", (c) => {
  console.log(c);
  const k = getRuntimeKey();
  return c.json({ msg: k });
});

export const ALL: APIRoute = ({ locals, request }) =>
  app.fetch(request, locals.runtime.env);
