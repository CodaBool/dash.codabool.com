export const revalidate = 3600 // seconds until page revalidation

import Link from 'next/link'
import Image from 'next/image'

const now = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}))
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

const sites = {
  'https://media.codabool.com': '/jellyfin.svg',
  'https://sync.codabool.com': '/sync.svg',
  'https://movies.codabool.com': '/radarr.svg',
  'https://tv.codabool.com': '/sonarr.svg',
  'https://qbit.codabool.com': '/qbit.svg',
  'https://index.codabool.com': '/jackett.svg',
  'https://rss.codabool.com': '/rss.svg',
  'https://bin.codabool.com': '/bin.svg',
  'https://doc.codabool.com': '/doc.svg',
  'https://rpg.codabool.com': '/d20.webp',
  'https://plex.codabool.com': '/plex.webp',
  'https://photos.codabool.com': '/immich.webp',
  'https://money.codabool.com': '/money.webp',
}

export default function Main() {
  return (
    <>
      <Image
        src='/background.jpg'
        alt="background"
        sizes="100vw"
        fill
        style={{
          objectFit: 'cover',
          zIndex: -1
        }}
      />
      <h1 className="time">
        {emoji}
      </h1>
      <div className="flex-container">
        {Object.entries(sites).map(obj => (
          <div className="flex-item" key={obj[0]}>
            <Link href={obj[0]}>
              <div className="circle"></div>
              <Image
                src={obj[1]}
                alt={obj[1]}
                quality={20}
                sizes="(min-width: 960px) 250px, (max-width: 960px) 150px, (max-width: 544px) 100px"
                fill
                style={{ objectFit: 'cover' }}
                />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
