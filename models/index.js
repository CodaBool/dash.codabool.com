import mongoose, { Schema } from 'mongoose'
const anySchema = new Schema({ any: {} })
export default mongoose.models.collection || mongoose.model('collection', anySchema)