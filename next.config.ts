/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === 'true'
const repo = 'portfolio' // change to your repo name
const basePath = isPages ? `/${repo}` : ''

export default {
  output: 'export',               // enable static export
  images: { unoptimized: true },  // next/image works with static export
  basePath,                       // when deploying to GitHub Pages set basePath to /<repo>
  assetPrefix: isPages ? `/${repo}/` : '',  // ensure assets are prefixed correctly
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,  // expose basePath for client-side image paths
  },
}
