import request from '@/plugin/axios'
import { token } from '@/api/token.js'

export function conditionalQuery (data) {
  return request({
    url: 'conditionalquery?token=' + token + '&startTime=' + data.startTime + '&endTime=' + data.endTime + '&table=' + data.table +
			'&page=' + data.page + '&stuId=' + data.stuId + '&department=' + data.department,
    method: 'get'
  })
}
