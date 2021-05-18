import Mongo from "../../models"
import { connectDB } from "../../util/db"

export default async (req, res) => {
  try {
    const { body } = req
    res.status(200).json({msg: 'hi'})
  } catch (err) {
    res.status(500).json({ msg: err.message || err})
  }
}

export async function getTable() {
  await connectDB()
  const tables = await Mongo.find()
  // remote pg connection
  const result = await query('SELECT * FROM post', [])
  console.log('result', result)
  // no post relation
  let totalViews = 0
  for (const page in result.rows) {
    totalViews = totalViews + Number(result.rows[page].views)
  }
  return 1
}