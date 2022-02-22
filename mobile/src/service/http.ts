import axios, { Axios } from 'axios';

class HttpSerivce {
  baseUrl: string;
  apiVersion: string;
  fetchingService: Axios;
  constructor(
      baseUrl = 'http://localhost:5000',
      fetchingService = axios,
      apiVersion = 'api',
  ) {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.fetchingService = fetchingService;
  }

  getUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  get(url: string) {
    return this.fetchingService.get(this.getUrl(url));
  }

  getFiltered(url: string, params: object) {
    return this.fetchingService.get(`${this.getUrl(url)}/search`, { params });
  }

  add(url: string, data: object) {
    return this.fetchingService.post(this.getUrl(url), data);
  }

  edit(url: string, data: object) {
    return this.fetchingService.put(this.getUrl(url), data);
  }

  delete(url: string) {
    return this.fetchingService.delete(this.getUrl(url));
  }
}

export default HttpSerivce;
