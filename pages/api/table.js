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
  // heroku hours
  // exec('/home/codabool/scripts/bash-scripts/getHeroku.sh', (error, stdout, stderr) => {
  //   (stdout) => {
  //     const hours = stdout.replace(/\s/g,'')
  //     console.log({ p4a: p4a.rows[0], p8a: p8a.rows[0], mom: mom.rows[0], stat: result.rows, inReview: inReview.rows, totalViews, hours})
  //   }
  // })
  return 1
}