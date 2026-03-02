export const POSTAPICALL = async (url, data, multipart, token) => {
  //  console.log(multipart)
  console.log('Form data', data);
  try {
    const res = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
        //  Authorization: `Bearer ${token}`,
      },
      body: data,
    })
      // .then((response) => response.json())
      // .then((responseJson) => {
      //    return JSON.stringify(responseJson) ;
      //     // console.log('response object:',responseJson.data)
      // })
      .catch(error => {
        return error;
      });
    const finalResult = await res?.json();
    return finalResult;
  } catch (error) {
    return error;
  }
};


export const POSTAPICALLWITHJSON = async (url, data, multipart, token) => {
  //  console.log(multipart)
  // console.log('Form data', data);
  console.log(JSON.stringify({ users: data }),)


  try {
    const res = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ user: data }),
    })
      // .then((response) => response.json())
      // .then((responseJson) => {
      //    return JSON.stringify(responseJson) ;
      //     // console.log('response object:',responseJson.data)
      // })
      .catch(error => {
        return error;
      });
    const finalResult = await res?.json();
    return finalResult;
  } catch (error) {
    return error;
  }
};

export const GETAPICALL = async (url, token) => {
  try {
    const res = await fetch(`${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      //   body: data,
    })
      // .then((response) => response.json())
      // .then((responseJson) => {
      //    return JSON.stringify(responseJson) ;
      //     // console.log('response object:',responseJson.data)
      // })
      .catch(error => {
        return error;
      });
    const finalResult = await res?.json();
    return finalResult;
  } catch (error) {
    return error;
  }
};


