import request from '@/plugin/axios'
import { token } from '@api/system/token.js'

export function certStu2 (data) {
  return request({
    url: 'certstu2?token=' + token + '&type=student',
    method: 'get',
    data
  })
}
