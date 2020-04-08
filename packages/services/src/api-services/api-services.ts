import {Api, NewApi} from "@apicurio/models";
import {AbstractHubService} from "./hub";
import {ConfigService} from "../config/config.service";
import {IAuthenticationService} from "../authentication/auth.service";
import { AxiosRequestConfig } from "axios";

/**
 * An implementation of the APIs service that uses the Apicurio Studio back-end (Hub API) service
 * to store and retrieve relevant information for the user.
 */
export class ApisService extends AbstractHubService {
    private cachedApis: Api[] = null;

    /**
     * Constructor.
     * @param authService
     * @param config
     */
    constructor(authService: IAuthenticationService, config: ConfigService) {
        super(authService, config);
    }

    // Gets all APIs
    public getApis(): Promise<Api[]> {
      console.info("[ApisService] Getting all APIs");
  
      const listApisUrl: string = this.endpoint("designs");
      const options: AxiosRequestConfig = this.options({ "Accept": "application/json", 'Access-Control-Allow-Origin': '*' });
  
      console.info("[ApisService] Fetching API list: %s", listApisUrl);
      return this.httpGet<Api[]>(listApisUrl, options, (apis) => {
        this.cachedApis = apis;
        return apis;
      })
    }

    public createApi(api: NewApi): Promise<Api> {
      console.info("[ApisService] Creating the API via the hub API");

      let createApiUrl: string = this.endpoint("/designs");
      let options: any = this.options({ "Accept": "application/json", "Content-Type": "application/json" });

      console.info("[ApisService] Creating an API Design: %s", createApiUrl);
      return this.httpPostWithReturn<NewApi, Api>(createApiUrl, api, options);
  }
}
