import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/admin/system/login',
    method: 'post',
    data
  })
}
