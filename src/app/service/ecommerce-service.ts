export default class ECommerceService {
  public async getRevenue(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }
}
