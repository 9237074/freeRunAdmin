import request from '@/plugin/axios'
import { token } from '@/api/token.js'

export function readRecord (data, status, offset) {
  return request({
    url: 'adminreadrecord?token=' + token + '&type=student' + '&status=' + status + '&offset=' + offset,
    method: 'get',
    data
  })
}
