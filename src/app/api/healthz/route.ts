export async function GET() {
  // TODO: Check if DB is healthy
  return new Response(
    JSON.stringify({
      ok: true,
      version: "1.0",
      datetime: new Date().toISOString(),
    })
  );
}
