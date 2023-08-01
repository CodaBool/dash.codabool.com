import './globals.css'

export const metadata = {
  title: "CodaBool's Dashboard",
  description: 'Self host dashboard for CodaBool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}