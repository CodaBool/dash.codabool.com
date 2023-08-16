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
  'https://media.codadash.com': '/jellyfin.svg',
  'https://pass.codadash.com': '/bitwarden.svg',
  'https://sync.codadash.com': '/sync.svg',
  'https://movie.codadash.com': '/radarr.svg',
  'https://show.codadash.com': '/sonarr.svg',
  'https://qbit.codadash.com': '/qbit.svg',
  'https://jackett.codadash.com': '/jackett.svg',
  'https://proxy.codadash.com': '/proxy.svg',
  'http://192.168.0.25:7070': '/rss-custom.svg',
  'https://rss.codadash.com': '/rss.svg',
  'https://bin.codadash.com': '/bin.svg',
  'https://meal.codadash.com': '/meal.svg',
  'https://doc.codadash.com': '/doc.svg',
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
