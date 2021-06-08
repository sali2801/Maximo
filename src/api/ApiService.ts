import api from './api';
import config from '../config';
import { setMockData } from '../redux/actions';

const ApiService = {
  loadData(dispatch: any) {
    api
      .getMockData(config.endPoints.posts)
      .then((posts) => {
        dispatch(setMockData(posts));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  },
};
export default ApiService;
