import Express from 'express'
const path = require('path');
import axios from 'axios'
import qs from 'qs'
import { clientID, redirectURL, clientSecret } from '../config.json'
const app = Express.Router()

app.get('/notify', (req, res) => {
  console.log("this is code", req.query.code)
  const code = req.query.code

  const data = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectURL,
    client_id: clientID,
    client_secret: clientSecret,
  }

  const axiosConfig = {
    method: 'post',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'https://notify-bot.line.me/oauth/token',
    data: qs.stringify(data),
  }

  axios(axiosConfig).then((axiosRes) => {
    console.log(axiosRes.data)
    const accessToken = axiosRes.data.access_token
    console.log('Access Token')
    console.log(accessToken)
  })
  res.redirect('http://127.0.0.1:5500/public/requestToken.html')
})

app.get('/notifysend/:token', (req, res) => {
  const token = req.params.token
  const notifyData = {
    message: 'ทดสอบการ Notify',
  }

  const axiosConfigNotify = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ` + token,
    },
    url: 'https://notify-api.line.me/api/notify',
    data: qs.stringify(notifyData),
  }

  axios(axiosConfigNotify).then((axiosRes) => {
    console.log(axiosRes.data)
    res.send(axiosRes)
    // console.log(res.status)
  })
})

export default app
