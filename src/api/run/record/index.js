import request from '@/plugin/axios'
import { token } from '@/api/token.js'

export function runRecord (data, status, offset) {
  return request({
    url: 'adminrunrecord?token=' + token + '&type=student' + '&status=' + status + '&offset=' + offset,
    method: 'get',
    data
  })
}
