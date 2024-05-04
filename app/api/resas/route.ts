export async function GET() {
  try {
    const res = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures/',
      {
        headers: {
          'X-API-KEY': process.env.RESAS_API_KEY || '',
        },
      },
    )
    const data = await res.json()

    return Response.json({ data })
  } catch (error) {
    console.error('都道府県の取得に失敗しました', error)
  }
}
