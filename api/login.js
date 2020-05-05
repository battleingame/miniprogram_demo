import {
  request
} from '../utils/request.js'

export const login = (data) => request('WeChat/Login.aspx', 'POST', data)
//获取验证码
export const getMessageCode = (mobile) => request('Donor/DonorPhoneCode.aspx?' + mobile, 'POST')