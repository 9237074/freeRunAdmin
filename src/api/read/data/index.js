import request from '@/plugin/axios'

export default function readData (data) {
  return request({
    url: '/admin/read/readdata',
    method: 'post',
    data
  })
}
