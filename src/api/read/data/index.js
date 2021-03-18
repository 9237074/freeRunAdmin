import request from '@/plugin/axios'
import { token } from '@api/system/token.js'

export function readData (data) {
  return request({
    url: 'adminreaddata?token=' + token,
    method: 'get',
    data
  })
}
