export default {
  dev: {
    NODE_ENV: 'development',
    API_HOST: '/v2'
  },

  prd: {
    NODE_ENV: 'production',
    API_HOST: 'http://api.douban.com/v2'
  }
}
