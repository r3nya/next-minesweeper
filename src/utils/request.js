export const request = async (httpMethod = 'GET', resource, data = {}) => {
  try {
    const fetchOptions = {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (httpMethod === 'POST') {
      fetchOptions.body = JSON.stringify(data);
    }

    const result = await fetch(resource, fetchOptions);

    const jsonData = await result.json();

    return jsonData;
  } catch (err) {
    console.error('Ooops:', err);
    throw new Error(err);
  }
}
