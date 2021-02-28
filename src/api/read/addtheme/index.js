import request from '@/plugin/axios'
import { token } from '@/api/token.js'

export function readAddTheme (data, offset, change, theme, readTime, readDate, readSite, people) {
  return request({
    url: `adminreadAddTheme?token=${token}&type=student&offset=${offset}&change=${change}&theme=${theme}&readTime=${readTime}&readDate=${readDate}&readSite=${readSite}&people=${people}`,
    method: 'get',
    data
  })
}
