import {Api, NewApi} from "@apicurio/models";
import {AbstractHubService} from "./hub";
import {ConfigService} from "../config/config.service";
import {IAuthenticationService} from "../authentication/auth.service";

/**
 * An implementation of the APIs service that uses the Apicurio Studio back-end (Hub API) service
 * to store and retrieve relevant information for the user.
 */
export class CreateApiService extends AbstractHubService {

    constructor(authService: IAuthenticationService, config: ConfigService) {
        super(authService, config);
    }

  public createApi(api: NewApi): Promise<Api> {
    console.info("[ApisService] Creating the API via the hub API");

    let createApiUrl: string = this.endpoint("/designs");
    let options: any = this.options({ "Accept": "application/json", "Content-Type": "application/json" });

    console.info("[ApisService] Creating an API Design: %s", createApiUrl);
    return this.httpPostWithReturn<NewApi, Api>(createApiUrl, api, options);
  }
}
