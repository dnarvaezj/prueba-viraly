import useAxios from 'axios-hooks';

export const HttpRequest = (page, limit, status, token) => {

  console.log(page, limit, status);

  const [{ data, loading, error }] = useAxios({
    method: 'GET',
    url: `https://api-staging.viraly.ai/users/devices_requests`,
    headers: { 'Authorization': `Bearer ${token}` },
    params: {
      'page': page,
      'userId': 'ZsZrySuNxkGxxE8GsltsT',
      'limit': limit,
      'requestStatus': status
    }
  });

  return {data, loading, error};
}

export const PostHttpRequest = () => {

    const [{ data, loading, error }] = useAxios({
      method: 'POST',
      url: `https://api-staging.viraly.ai/users/login`,
      data: {
        "email": "gerencia@viraly.ai",
        "password": "CtAEaJbvt8TZ2wcS",
        "deviceId": "14dm1n"
      }
    });

    console.log(data);
  
    return {dataRes: data, loading, error};
  }