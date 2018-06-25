import axios from 'axios'
import host from './host'

const fetth = axios.create({
  // baseURL: 'http://api.douban.com/',
  method: 'post',
  timeout: 10000,
  // `headers` are custom headers to be sent
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
})

fetth.interceptors.request.use(function (config) {
  // 判断环境
  let baseUrl = process.env.NODE_ENV === host.dev.NODE_ENV ? host.dev.API_HOST : host.prd.API_HOST
  config.url = baseUrl + config.url
  return config
}, function (error) {
  return Promise.reject(error)
})

fetth.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default fetth
