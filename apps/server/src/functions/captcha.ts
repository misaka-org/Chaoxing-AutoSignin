import { request } from '../utils/request';
interface CaptchaResponse {
    status: number;
    msg: string;
    data: {
        validate: string;
    };
}

/**
 * 获取滑块验证码
 * 
 * 请注意此接口有频率限制
 * @returns 
 */
export const getValidate = async () => {
    const result = await request('https://cx.micono.eu.org/api/validate', {});
    const res: CaptchaResponse = JSON.parse(result.data);
    const validate: string = res.data.validate;
    return validate;
}
