import request from '@/plugin/axios'
import { token } from '@api/system/token.js'

// import token from '../../system/token'

export function errData (data) {
  return request({
    url: 'adminErrData?token=' + token + '&type=student',
    method: 'get',
    data
  })
}
