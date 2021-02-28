import request from '@/plugin/axios'
import { token } from '@/api/token.js'

export function readGrade (data, status, offset) {
  return request({
    url: 'adminreadGrade?token=' + token + '&type=student' + '&status=' + status + '&offset=' + offset,
    method: 'get',
    data
  })
}
