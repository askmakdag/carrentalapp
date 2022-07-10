import axios from '../helpers/axios';
import {RentalCarModel} from "../types/models";

class RentalService {
  getAll(): Promise<{ data: RentalCarModel[] }> {
    return axios.get(`/feed`);
  }
}

export default new RentalService();
