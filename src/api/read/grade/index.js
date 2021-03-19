import request from '@/plugin/axios'

export default function readGrade (data) {
  return request({
    url: '/admin/read/readgrade',
    method: 'post',
    data
  })
}
