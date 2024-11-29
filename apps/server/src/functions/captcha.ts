import { request } from '../utils/request';
interface CaptchaResponse {
    status: number;
    msg: string;
    validate: string;
}

/**
 * 获取滑块验证码
 * 
 * 请注意此接口同一IP每分钟至多调用30次
 * @returns 
 */
export const getValidate = async () => {
    const result = await request('https://cx-api.yangrucheng.top/get_captcha', {});
    const data: CaptchaResponse = JSON.parse(result.data);
    const validate: string = data.validate;
    return validate;
}
