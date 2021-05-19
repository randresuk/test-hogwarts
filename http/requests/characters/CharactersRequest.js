import { httpResources } from '../../../src/common/constants';
import BaseHttpClient from '../../BaseHttpClient';

class HogwartsList extends BaseHttpClient {
  constructor() {
    super();
  }

  async list() {
    try {
      const response = await this.httpClient.get(httpResources.HOGWARTS_LIST);
      this.setResponse(response);
      console.log(response);
    } catch (error) {
      this.setError(error);
    }
  }
}

export default new HogwartsList();
