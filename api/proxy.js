module.exports = async function handler(req, res) {
  const explicitUrl = req.query.url || req.query.target || "";
  const site = req.query.site || "";

  const target = explicitUrl || (site ? getDestination(site) : "") || getProtectedTarget();

  if (!target) {
    res.status(500).json({
      error: "Protected target not configured",
      hint: "Set the NOTION_URL environment variable in Vercel or pass ?url=..."
    });
    return;
  }

  try {
    const upstream = new URL(target);
    const response = await fetch(upstream.toString(), {
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; GemLibProxy/1.0)"
      }
    });

    const contentType = response.headers.get("content-type") || "text/plain";
    const body = await response.arrayBuffer();

    res.status(response.status);
    res.setHeader("content-type", contentType);
    res.end(Buffer.from(body));
  } catch (error) {
    res.status(502).json({
      error: "Proxy failed",
      detail: error.message
    });
  }
};

function getProtectedTarget() {
  return process.env.NOTION_URL || "";
}

function getDestination(site) {
  // Server-side mapping of short names to real targets.
  // Keep real URLs in environment variables when possible.
  const map = {
    example: process.env.NOTION_URL || "",
  };

  return map[site] || "";
}
