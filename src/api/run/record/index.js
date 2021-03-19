import request from '@/plugin/axios'

export default function runRecord (data) {
  return request({
    url: '/admin/run/runrecord',
    method: 'post',
    data
  })
}
