import axios from '../helpers/axios';

class CarService {
  getCars() {
    return axios.get(`/cars`);
  }
}

export default new CarService();
