import request from '@/plugin/axios'

export default function readAddTheme (data) {
  return request({
    url: `/admin/read/addtheme`,
    method: 'post',
    data
  })
}
