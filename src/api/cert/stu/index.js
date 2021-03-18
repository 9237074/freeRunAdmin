import request from '@/plugin/axios'
import { token } from '@api/system/token.js'

export function certStu (data) {
  return request({
    url: 'certstu?token=' + token + '&type=student',
    method: 'get',
    data
  })
}
