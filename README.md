<a href="https://vercel.com/new/project?template=7architect/og.json"><img width="128" src="https://vercel.com/button" align="right"></a>

# Open graph API Service

Simple open graph REST API based on [open-graph-scrapper](https://github.com/jshemas/openGraphScraper#readme)


## What is an Open Graph Image?

Have you ever posted a hyperlink to Twitter, Facebook, or Slack and seen an image popup?
How did your social network know how to "unfurl" the URL and get an image?
The answer is in your `<head>`.

The [Open Graph protocol](http://ogp.me) says you can put a `<meta>` tag in the `<head>` of a webpage to define this image.

## How use

- Run with vercel `vercel`
- Send an HTTP GET to `https://<vercel_deploy_url>/api?url=<URL>`

# Query params

- `url` - url path for parse og tags

## Deploy your own

You'll want to fork this repository and deploy your own image generator.

1. Click the fork button
2. Clone the repo `git clone URL_OF_FORKED_REPO_HERE`
3. Change directory with `cd og.json`
4. Make changes
6. Run locally with `vercel dev` and visit [localhost:3000](http://localhost:3000)  (if nothing happens, run `npm install -g vercel`)
7. Deploy to the cloud by running `vercel` and you'll get a unique URL
8. Setup [GitHub](https://vercel.com/github) to autodeploy on push

## Authors

- Alexander Katkov ([7architect](https://7architect.dev))
