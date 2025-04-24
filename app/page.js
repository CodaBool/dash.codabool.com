// export const revalidate = 3600 // seconds until page revalidation

import Link from 'next/link'
import Image from 'next/image'

const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }))
// let hour = now.getHours()

// const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
// if (hour > 12) {
//   hour = hour - 12
// }
// const time = hour + ":" + minutes + " "

// 🌅 ☀️ ⛅ 🌤️ 🌇 🌄 🌕 🌑 ⛅ 🌙 🌗
const hour = now.getHours()
let emoji = ''
if (hour <= 3) emoji = "🌑"
if (hour > 3 & hour <= 6) emoji = "🌗"
if (hour > 6 & hour <= 9) emoji = "🌅"
if (hour > 9 & hour <= 12) emoji = "⛅"
if (hour > 12 & hour <= 15) emoji = "☀️"
if (hour > 15 & hour <= 18) emoji = "🌤️"
if (hour > 18 & hour <= 21) emoji = "🌄"
if (hour > 21 & hour <= 24) emoji = "🌙"

export default async function Main({ searchParams }) {
  const { l } = await searchParams
  const useLocalIp = typeof l === "string"
  let sites
  if (useLocalIp) {
    sites = {
      'http://192.168.0.25:8096': '/jellyfin.webp',
      'http://192.168.0.25:8384': '/sync.webp',
      'http://192.168.0.25:7878': '/radarr.webp',
      'http://192.168.0.25:8989': '/sonarr.webp',
      'http://192.168.0.25:8080': '/qbit.webp',
      'http://192.168.0.25:9696': '/jackett.webp',
      'http://192.168.0.25:30001': '/lancer.webp',
      'https://ssh.codabool.com': '/ssh.webp',
      'http://192.168.0.25:8085': '/rss.webp',
      'http://192.168.0.25:8081': '/bin.webp',
      'http://192.168.0.25:3080': '/librechat.webp',
      // 'http://192.168.0.25:7075': '/doc.webp',
      'http://192.168.0.25:30000': '/d20.webp',
      'http://192.168.0.25:32400': '/plex.webp',
      'http://192.168.0.25:8675': '/upvote.webp',
      'http://192.168.0.25:5000': '/changedetect.webp',
      'http://192.168.0.25:1200': '/rsshub.webp',
      'http://192.168.0.25:6767': '/bazarr.webp',
      'http://192.168.0.25:2283/albums': '/immich.webp',
      // 'https://money.codabool.com': '/money.webp',
      'http://192.168.0.25:3001': '/uptime.webp',
      'http://192.168.0.25:8082': '/tools.webp',
      'https://web.stremio.com': '/stremio.webp',
    }
  } else {
    sites = {
      'https://media.codabool.com': '/jellyfin.webp',
      'https://sync.codabool.com': '/sync.webp',
      'https://movies.codabool.com': '/radarr.webp',
      'https://tv.codabool.com': '/sonarr.webp',
      'https://qbit.codabool.com': '/qbit.webp',
      'https://index.codabool.com': '/jackett.webp',
      'https://lancer.codabool.com': '/lancer.webp',
      'https://ssh.codabool.com': '/ssh.webp',
      'https://rss.codabool.com': '/rss.webp',
      'https://bin.codabool.com': '/bin.webp',
      // 'https://doc.codabool.com': '/doc.webp',
      'https://rpg.codabool.com': '/d20.webp',
      'https://plex.codabool.com': '/plex.webp',
      // 'https://upvote.codabool.com': '/upvote.webp',
      'https://photos.codabool.com': '/immich.webp',
      // 'https://money.codabool.com': '/money.webp',
      'https://uptime.codabool.com': '/uptime.webp',
      'https://tools.codabool.com': '/tools.webp',
      'https://web.stremio.com': '/stremio.webp',
    }
  }

  return (
    <>
      <Image
        src='/background.webp'
        alt="background"
        sizes="100vw"
        fill
        priority
        style={{
          objectFit: 'cover',
          zIndex: -1
        }}
      />

      <Link href={`${useLocalIp ? "/" : "/?l"}`} style={{ textDecoration: "none" }}>
        <h1 className={`time ${useLocalIp ? "bounce" : ""}`}>
          {emoji}
        </h1>
      </Link>
      <div className="flex-container">
        {Object.entries(sites).map(obj => (
          <div className="flex-item" key={obj[0]}>
            <Link href={obj[0]}>
              <Image
                src={obj[1]}
                alt={obj[1]}
                quality={20}
                priority
                sizes="(min-width: 960px) 150px, (max-width: 960px) 120px, (max-width: 544px) 90px"
                fill
                style={{ objectFit: 'cover' }}
              />
              <span style={{ display: "none" }}>{obj[0]}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
