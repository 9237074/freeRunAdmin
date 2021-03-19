import request from '@/plugin/axios';

export default function stuData (data) {
  return request({
    url: '/admin/system/stuData',
    method: 'post',
    data
  });
}
