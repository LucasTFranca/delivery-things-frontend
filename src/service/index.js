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

const registerUser = async (user) => {
  try {
    const { data } = await axios.post(`${baseUrl}/user`, user);

    return data;
  } catch (error) {
    return error.message;
  }
};

const uploadImage = async (image) => {
  const form = new FormData();
  form.append('image', image);

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  const fileAxios = axios.create();
  const { data } = await fileAxios.post(`${baseUrl}/product/image`, form, config);

  return data.image;
};

const addNewProduct = async (product, token) => {
  try {
    const {
      title, description, value, image,
    } = product;

    const imageUrl = await uploadImage(image);

    const { data } = await axios.post(`${baseUrl}/product`, {
      title,
      description,
      value,
      image: imageUrl,
    }, {
      headers: {
        Authorization: token,
      },
    });

    return data;
  } catch (error) {
    return error.message;
  }
};

export {
  getAllProducts,
  connectUser,
  registerUser,
  addNewProduct,
};
