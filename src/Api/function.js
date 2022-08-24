import { BaseUrl } from './BaseUrl'

export const GetApi = async (link) => {
    const url =  await fetch(`${BaseUrl}/${link}`)
    const response = await url.json();
    return response;
}