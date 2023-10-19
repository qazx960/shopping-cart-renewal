import axios from "axios";

export const cartList = async () => {
    const response = await axios.get('https://fakestoreapi.com/carts?limit=10');

    return response.data;
};