import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const getAllProducts = async () => {
  const { data } = await axios.get(`${baseUrl}/product`);

  return data;
};

export default getAllProducts;
