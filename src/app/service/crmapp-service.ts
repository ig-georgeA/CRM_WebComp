export default class CRMAppService {
  public async getMeetingsTasks(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/2fd4ecd6-da6c-4e37-e666-08dab79fa5b4');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }
}
