import request from '@/plugin/axios'
import { token } from '@api/system/token.js'

export function certStu0 (data) {
  return request({
    url: 'certstu0?token=' + token + '&type=student',
    method: 'get',
    data
  })
}
