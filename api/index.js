export default async (req, res) => {
  const openGraphScrapper = require('open-graph-scraper')
  const response = (code, message) => {
    const msg = code > 400
      ? { error: true, message }
      : { response: message }
    res.writeHead(code, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(msg))
  }
  const error = msg => response(401, msg)

  try {
    const requestedUrl = new URL(req.url, `http://${req.headers.host}`)
    const query = requestedUrl.searchParams

    if (!query.has('url')) error('`URL` param missing')

    const scrapperOptions = {
      url: query.get('url')
    }

    openGraphScrapper(scrapperOptions)
      .then(({ result }) => response(200, result))
      .catch(() => error('parse error'))

  } catch (e) {
    error('internal error')
  }
}
