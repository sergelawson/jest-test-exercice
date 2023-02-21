import axios from "axios";

const fetchData = async (id: number) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return data;
};

const getSwapi = async (id: number) => {
  const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);

  return data;
};

export { fetchData, getSwapi };
