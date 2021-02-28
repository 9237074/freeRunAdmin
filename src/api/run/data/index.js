import request from '@/plugin/axios'
import { token } from '@/api/token.js'

export function runData (data) {
  return request({
    url: 'adminrundata?token=' + token,
    method: 'get',
    data
  })
}
