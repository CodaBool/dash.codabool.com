import { EmojiDizzy, CaretLeft } from 'react-bootstrap-icons'
import Link from 'next/link'
import Tab from '../components/Tab'
import Button from 'react-bootstrap/Button'

// server
import Mongo from '../models'
import { connectDB, jparse } from '../util/db'

export default function table({ tables }) {

  return (
    <>
      <Link href="/">
        <Button className="my-2" variant="dark" style={{fontSize: '1.3em'}}>
          <CaretLeft className="mb-1" size={25} /> Back
        </Button>
      </Link>
      {tables 
        ? tables.map(table => <Tab data={table} key={table._id} />)
        : <div className="d-flex my-5">
            <EmojiDizzy className="mx-auto my-5" size={60} />
          </div>
      }
    </>
  )
}

export async function getStaticProps() {
  await connectDB()
  const tables = await Mongo.find()
  if (tables.length === 0) return { props: { } }
  return { props: { tables: jparse(tables) }, revalidate: 10 }
}