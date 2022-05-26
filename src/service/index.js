import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const getAllProducts = async () => {
  const { data } = await axios.get(`${baseUrl}/product`);

  return data;
};

const connectUser = async (user) => {
  try {
    const { data } = await axios.post(`${baseUrl}/login`, user);

    return data;
  } catch (error) {
    return error.message;
  }
};

export {
  getAllProducts,
  connectUser,
};
