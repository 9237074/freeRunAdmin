import request from '@/plugin/axios'
import { token } from '@/api/token.js'

export function runGrade (data, status, offset) {
  return request({
    url: 'adminrunGrade?token=' + token + '&type=student' + '&status=' + status + '&offset=' + offset,
    method: 'get',
    data
  })
}
