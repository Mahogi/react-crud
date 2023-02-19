import axios from 'axios';

const LINKEND = '/houses';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchHouses = async () => {
  const { data } = await api.get<HouseModel[]>(LINKEND);

  return data;
};

const fetchHouse = async (id: string | number) => {
  const { data } = await api.get<HouseModel>(`${LINKEND}/${id}`);

  return data;
};

const createHouse = async (body: string) => {
  const { status } = await api.post<HouseModel>(LINKEND, body);

  return status;
};

const deleteHouse = async (id: string) => {
  try {
    await api.delete(`${LINKEND}/${id}`);
  } catch (error) {
    alert(`There was an error! ${error}`);
  }
};

const ApiService = {
  fetchHouses,
  fetchHouse,
  createHouse,
  deleteHouse,
};

export default ApiService;
