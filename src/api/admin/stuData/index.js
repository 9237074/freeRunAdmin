import request from '@/plugin/axios'
import { token } from '@/api/token.js'

export function stuData (data) {
  return request({
    url: 'adminStuData?token=' + token + '&type=student',
    method: 'get',
    data
  })
}
