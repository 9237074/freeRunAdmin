import request from '@/plugin/axios'
import checkKey from '@/libs/util.checkKey'

export function AccountLogin (data) {
  data.password = checkKey(data.user + data.password)
  return request({
    url: '/admin/system/login',
    method: 'post',
    data
  })
}
