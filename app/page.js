import Link from 'next/link'
import Image from 'next/image'

const now = new Date()
let hour = now.getHours()

const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
if (hour > 12) {
  hour = hour - 12
}
const time = hour + ":" + minutes + " "

// 🌅 ☀️ ⛅ 🌤️ 🌇 🌄 🌕 🌑 ⛅ 🌙 🌗
hour = now.getHours()
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
  'https://media.codadash.com': '/jellyfin.png',
  'https://pass.codadash.com': '/bitwarden.png',
  'https://sync.codadash.com': '/sync.png',
  'https://movie.codadash.com': '/radarr.png',
  'https://show.codadash.com': '/sonarr.png',
  'https://qbit.codadash.com': '/qbit.png',
  'https://jackett.codadash.com': '/jackett.png',
  'https://proxy.codadash.com': '/proxy.png'
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
        {time} {emoji}
      </h1>
      <div className="flex-container">
        {Object.entries(sites).map(obj => (
          <div className="flex-item" key={obj[0]}>
            <Link href={obj[0]}>
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
