import request from '@/plugin/axios'
import { token } from '@/api/token.js'

export function certStu1 (data) {
  return request({
    url: 'certstu1?token=' + token + '&type=student',
    method: 'get',
    data
  })
}
