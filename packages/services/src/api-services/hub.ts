import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {IAuthenticationService} from "../authentication/auth.service";
import {ConfigService} from "../config/config.service";
import {User} from '@apicurio/models';

/**
 * Base class for all Hub-API based services.
 */
export abstract class AbstractHubService {

  private apiBaseHref: string;
  private editingBaseHref: string;

  /**
   * Constructor.
   * @param http
   * @param authService
   */
  constructor(protected authService: IAuthenticationService, protected config: ConfigService) {
      this.apiBaseHref = this.config.hubUrl();
      this.editingBaseHref = this.config.editingUrl();
  }

  /**
   * Gets the current user.
   */
  protected user(): User {
      return this.authService.getAuthenticatedUserNow();
  }


  /**
   * Creates a hub API endpoint from the api path and params.
   * @param path
   * @param params
   * 
   */
  protected endpoint(path: string, params?: any, queryParams?: any): string {
      if (params) {
          for (let key in params) {
              let value: string = encodeURIComponent(params[key]);
              path = path.replace(":" + key, value);
          }
      }
      let rval: string = this.apiBaseHref + path;
      if (queryParams) {
          let first: boolean = true;
          for (let key in queryParams) {
              if (queryParams[key]) {
                  let value: string = encodeURIComponent(queryParams[key]);
                  if (first) {
                      rval = rval + "?" + key;
                  } else {
                      rval = rval + "&" + key;
                  }
                  if (value != null && value != undefined) {
                      rval = rval + "=" + value;
                  }
                  first = false;
              }
          }
      }
      return rval;
  }

  /**
   * Creates an editing endpoint from the given relative path and params.
   * @param path
   * @param params
   * 
   */
  protected editingEndpoint(path: string, params?: any): string {
      if (params) {
          for (let key in params) {
              let value: string = encodeURIComponent(params[key]);
              path = path.replace(":" + key, value);
          }
      }
      return this.editingBaseHref + path;
  }

  /**
   * Creates the request options used by the HTTP service when making
   * API calls.
   * @param headers
   * @param authenticated
   * 
   */
  protected options(headers: {[header: string]: string}, authenticated: boolean = true): AxiosRequestConfig {
      const options: AxiosRequestConfig = {headers};
      if (authenticated) {
          this.authService.injectAuthHeaders(options.headers);
      }
      return options;
  }

  /**
   * Performs an HTTP GET operation to the given URL with the given options.  Returns
   * a Promise to the HTTP response data.
   */
  protected httpGet<T>(url: string, options: AxiosRequestConfig, successCallback?: (value: any) => any): Promise<any> {
  
    const config: AxiosRequestConfig = {...{
      method: 'get',
      url
    }, ...options}

    return axios.request(config)
    .then(response => {
      if (successCallback) {
       return successCallback(response);
      }
      else {
        return response;
     }
    })
    .catch(error => console.log(error)); // handle error state
  }

}