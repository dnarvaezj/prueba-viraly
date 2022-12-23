import useAxios from 'axios-hooks';

export const HttpRequest = (page, limit, status, token) => {

  console.log(page, limit, status);

  const [{ data, loading, error }] = useAxios({
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}devices_requests`,
    headers: { 'Authorization': `Bearer ${token}` },
    params: {
      'page': page,
      'userId': process.env.REACT_APP_USERID,
      'limit': limit,
      'requestStatus': status
    }
  });

  return {data, loading, error};
}

export const PostHttpRequest = () => {

    const [{ data, loading, error }] = useAxios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASE_URL}login`,
      data: {
        "email": process.env.REACT_APP_EMAIL,
        "password": process.env.REACT_APP_PASSWORD,
        "deviceId": process.env.REACT_APP_DEVICEID
      }
    });

    console.log(data);
  
    return {dataRes: data, loading, error};
  }