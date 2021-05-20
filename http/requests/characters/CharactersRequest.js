import { httpResources } from '../../../src/common/constants';
import BaseHttpClient from '../../BaseHttpClient';
import { putParams } from '../../../src/lib/core';


class HogwartsList extends BaseHttpClient {
  constructor() {
    super();
  }

  // list all characters
  async list() {
    try {
      const response = await this.httpClient.get(httpResources.HOGWARTS_LIST);
      this.setResponse(response);
    } catch (error) {
      this.setError(error);
    }
  }
  // list characters for house
  async find(nameHouse) {
    try {
      const resource = putParams(`${httpResources.HOGWARTS_LIST}${nameHouse}`);
      console.log('resource', resource)
      const response = await this.httpClient.get(resource);
      this.setResponse(response);
    } catch (error) {
      this.setError(error);
    }
  }
}

export default new HogwartsList();
