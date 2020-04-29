import {Api, ApiCollaborator} from "@apicurio/models";
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
    private cachedCollaborators: ApiCollaborator[] = null;

    /**
     * Constructor.
     * @param authService
     * @param config
     */
    constructor(authService: IAuthenticationService, config: ConfigService) {
        super(authService, config);
    }

              /**
     * @see ApisService.getCollaborators
     */
    public getCollaborators(apiId: string): Promise<ApiCollaborator[]> {
      console.info("[ApisService] Getting collaborators for API Design %s", apiId);

      let getCollaboratorsUrl: string = this.endpoint("/designs/:designId/collaborators", {
          designId: apiId
      });
      let options: any = this.options({ "Accept": "application/json" });

      console.info("[ApisService] Fetching collaborator list: %s", getCollaboratorsUrl);
      return this.httpGet<ApiCollaborator[]>(getCollaboratorsUrl, options, (resp) => {
        this.cachedCollaborators = resp as ApiCollaborator[];
        console.log(`api-services: cachedCollaborators = ${this.cachedCollaborators}`);
        return this.cachedCollaborators;
      });
  }

    // Gets all APIs
    public getApis(): Promise<Api[]> {
      console.info("[ApisService] Getting all APIs");
  
      const listApisUrl: string = this.endpoint("designs");
      const options: AxiosRequestConfig = this.options({ "Accept": "application/json", 'Access-Control-Allow-Origin': '*' });
  
      console.info("[ApisService] Fetching API list: %s", listApisUrl);
      return this.httpGet<Api[]>(listApisUrl, options, (resp) => {
        this.cachedApis = resp as Api[];
        // this.getCollaborators(this.cachedApis[0].id).then( (value: ApiCollaborator[]) => {debugger;});
        return this.cachedApis;
      })
    }
}
