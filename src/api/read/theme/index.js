import request from '@/plugin/axios'

export default function readTheme (data) {
  return request({
    url: '/admin/read/readtheme',
    method: 'post',
    data
  })
}
