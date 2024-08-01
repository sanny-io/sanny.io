export async function GET(request: Request) {
  const path = request.url.substring(request.url.indexOf('/api/'))
  const response = await fetch(`${process.env.NEXT_PUBLIC_DEPLOYED_URL}/${path}`)

  return response
}

export const dynamic = 'force-static'