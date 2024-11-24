const axios = require('axios');

// Create resource
const createCollection = async () => {

  const headers = {
    'Authorization': 'Token ' + process.env.API_TOKEN
  };

  try {
    const response = await axios.post('https://api.wetrocloud.com/v1/create/', null, { headers });
    console.log(response.data)
    return response.data;

  } catch (error) {

    console.log('An error occurred');
    return error.response;
  }


}


// Insert resource
const insertResource = async (collectionId, resourceUrl, resourceType) => {

  const headers = {
    'Authorization': 'Token ' + process.env.API_TOKEN
  };

  const data = new FormData();
  data.append('collection_id', collectionId);
  data.append('resource', resourceUrl);
  data.append('type', "file"); //Possible alternatives 'file' | 'text' | 'json' | 'web'


  try {
    const response = await axios.post('https://api.wetrocloud.com/v1/insert/', data, { headers });
    console.log(response.data)
    return response.data;

  } catch (error) {

    console.log('An error occurred');
    return error.response;
  }


}

// Query resource
const queryCollection = async (collectionId) => {
  const data = new FormData();
  data.append('collection_id', collectionId);
  data.append('request_query', 'What is this about?');
  data.append('json_schema', '[{"pageNo" : "", "description" : ""}]');
  data.append('json_schema_rules', 'Give a very short description of every page on the document from page 1 - 20');

  const headers = {
    'Authorization': 'Token ' + process.env.API_TOKEN,
  };

  try {
    const response = await axios.post('https://api.wetrocloud.com/v1/query/', data, { headers });
    console.log(response.data)
    return response.data;

  } catch (error) {
    console.log('An error occurred');
    return error.response;
  }
}
