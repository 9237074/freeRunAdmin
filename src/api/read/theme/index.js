import request from '@/plugin/axios'
import { token } from '@api/system/token.js'

export function readTheme (data, offset) {
  return request({
    url: 'adminreadTheme?token=' + token + '&type=student' + '&offset=' + offset,
    method: 'get',
    data
  })
}
