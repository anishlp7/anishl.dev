export async function getAniUIDownloads(): Promise<number> {
  try {
    const res = await fetch(
      "https://api.npmjs.org/downloads/point/last-month/aniui",
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return 0
    const data = await res.json()
    return data.downloads ?? 0
  } catch {
    return 0
  }
}
