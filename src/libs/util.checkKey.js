
import crypto from 'crypto'

export default function checkKey (data) {
  return crypto.createHmac('sha256', process.env.VUE_APP_KEY).update(String(String(data))).digest('hex')
}
