export default function sitemap() {
  const baseUrl = process.env.NODE_ENV === "production" ? "https://christianparanas.vercel.app" : "http://localhost:3000";
  const now = new Date();
  const routes = ["/", "/about", "/gist", "/blog", "/projects", "/guestbook"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1.0,
  }));
  return routes;
}
