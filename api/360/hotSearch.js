const axios = require('axios')

module.exports = async (req, res) => {
  const result = await axios({
    method: 'get',
    url: `https://weather.cma.cn/api/now/54511`
  })

  res.json({
    status: 'ok',
    data: result.data
  })
}
