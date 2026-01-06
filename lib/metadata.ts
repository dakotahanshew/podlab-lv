export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.podlablv.com")

export const getUrl = (path = "/") => new URL(path, siteUrl).toString()


