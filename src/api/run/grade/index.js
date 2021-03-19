import request from '@/plugin/axios'

export default function runGrade (data) {
  return request({
    url: '/admin/run/rungrade',
    method: 'post',
    data
  })
}
