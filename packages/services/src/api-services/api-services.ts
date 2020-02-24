import {Api} from "@apicurio/models";
// import {ApiContributor, ApiContributors} from "../models/api-contributors.model";
// import {NewApi} from "../models/new-api.model";
// import {ImportApi} from "../models/import-api.model";
// import {ICommand, MarshallCompat, OtCommand} from "apicurio-data-models";
// import {VersionedAck} from "../models/ack.model";
// import {ApiCollaborator} from "../models/api-collaborator.model";
// import {Invitation} from "../models/invitation.model";
// import {ApiEditorUser} from "../models/editor-user.model";
// import {ApiDesignChange} from "../models/api-design-change.model";
import {AbstractHubService} from "./hub";
// import {PublishApi} from "../models/publish-api.model";
// import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {ConfigService} from "../config/config.service";
import {IAuthenticationService} from "../authentication/auth.service";
// import {CodegenProject} from "../models/codegen-project.model";
// import {NewCodegenProject} from "../models/new-codegen-project.model";
// import {UpdateCodegenProject} from "../models/update-codegen-project.model";
// import {Injectable} from "@angular/core";
// import {ApiPublication} from "../models/api-publication.model";
// import {UpdateCollaborator} from "../models/update-collaborator.model";
// import {ApiMock, MockReference} from "../models/mock-api.model";
// import {HttpUtils} from "../util/common";
// import {StorageError} from "../models/storageError.model";
// import {DeferredAction} from "../models/deferred.model";
// import {SharingConfiguration} from "../models/sharing-config.model";
// import {UpdateSharingConfiguration} from "../models/update-sharing-config.model";

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

    public getApis(): Promise<Api[]> {
      console.info("[ApisService] Getting all APIs");
  
      const listApisUrl: string = this.endpoint("apis");
      const options: any = this.options({ "Accept": "application/json"});
  
      console.info("[ApisService] Fetching API list: %s", listApisUrl);
      return this.httpGet<Api[]>(listApisUrl, options, (apis) => {
        this.cachedApis = apis;
        return apis;
      })
    }
}
