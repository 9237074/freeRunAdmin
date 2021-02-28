import request from '@/plugin/axios'
import { token } from '@/api/token.js'

export function errData (data) {
  return request({
    url: 'adminErrData?token=' + token + '&type=student',
    method: 'get',
    data
  })
}
