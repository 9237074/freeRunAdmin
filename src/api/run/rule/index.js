import request from '@/plugin/axios'
import { token } from '@api/system/token.js'

export function runrule (data) {
  return request({
    url: 'adminrunrule?token=' + token + '&type=student',
    method: 'get',
    data
  })
}
