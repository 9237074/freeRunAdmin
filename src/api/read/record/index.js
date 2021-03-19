import request from '@/plugin/axios'

export default function readRecord (data) {
  return request({
    url: '/admin/read/readrecord',
    method: 'post',
    data
  })
}
