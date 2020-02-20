import axios from 'axios';
import React from 'react';
import {Api} from "../../../models/src/api.model";
import configService from "../config/config.service";
// import {IAuthenticationService} from "../authentication/auth.service";
// import {User} from "../../../models/src/user.model";
// import {ApiContributor, ApiContributors} from "../../../models/src/api-contributors.model";
// import {NewApi} from "../../../models/src/new-api.model";
// import {ImportApi} from "../../../models/src/import-api.model";
// import {ICommand, MarshallCompat, OtCommand} from "apicurio-data-models";
// import {VersionedAck} from "../../../models/src/ack.model";
// import {ApiCollaborator} from "../../../models/src/api-collaborator.model";
// import {Invitation} from "../../../models/src/invitation.model";
// import {ApiEditorUser} from "../../../models/src/editor-user.model";
// import {ApiDesignChange} from "../../../models/src/api-design-change.model";
// import {AbstractHubService} from "./hub";
// import {PublishApi} from "../../../models/src/publish-api.model";
// import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
// import {CodegenProject} from "../../../models/src/codegen-project.model";
// import {NewCodegenProject} from "../../../models/src/new-codegen-project.model";
// import {UpdateCodegenProject} from "../../../models/src/update-codegen-project.model";
// import {Injectable} from "@angular/core";
// import {ApiPublication} from "../../../models/src/api-publication.model";
// import {UpdateCollaborator} from "../../../models/src/update-collaborator.model";
// import {ApiMock, MockReference} from "../../../models/src/mock-api.model";
// import {HttpUtils} from "../util/common";
// import {StorageError} from "../../../models/src/storageError.model";
// import {DeferredAction} from "../../../models/src/deferred.model";
// import {SharingConfiguration} from "../../../models/src/sharing-config.model";
// import {UpdateSharingConfiguration} from "../../../models/src/update-sharing-config.model";

// export interface IConnectionHandler {
//     // Called when the connection is established.
//     onConnected(): void;
//     // Called when the connection is closed properly.
//     onClosed(): void;
//     // Called when the connection drops unexpectedly.
//     onDisconnected(closeCode: number): void;
// }

// export interface ICommandHandler {
//     onCommand(command: OtCommand): void;
//     onAck(ack: VersionedAck): void;
//     onDeferredAction(deferred: DeferredAction): void;
//     onStorageError(storageError: StorageError): void;
//     onUndo(contentVersion: number): void;
//     onRedo(contentVersion: number): void;
// }

// export interface IActivityHandler {
//     onJoin(user: ApiEditorUser): void;
//     onLeave(user: ApiEditorUser): void;
//     onSelection(user: ApiEditorUser, selection: string): void;
// }

/**
 * An implementation of the APIs service that uses the Apicurio Studio back-end (Hub API) service
 * to store and retrieve relevant information for the user.
 */

// interface ApisServiceProps {

// }

// export class ApisService extends React.Component<ApisServiceProps> {
//   constructor(props: ApisServiceProps) {
//     super(props);

//     this.apiBaseHref = this.config.hubUrl();
// }

  // protected authService: IAuthenticationService;
  // protected config: ConfigService;

  // private cachedApis: Api[] = null;
  // private apiBaseHref: string;

  const apiBaseHref = configService.hubURL();

  function endpoint (path: string, params?: any, queryParams?: any): string {
    if (params) {
      Object.keys(params).forEach(key => {
        let value: string = encodeURIComponent(params[key]);
        path = path.replace(":" + key, value);
      })
      }

      let rval: string = apiBaseHref + path;
        if (queryParams) {
          let first: boolean = true;
          Object.keys(queryParams).forEach(key => {
            if(queryParams[key]) {
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
          })
        }
      return rval;
  }

  function optionsFunc(headers: {[header: string]: string}, authenticated: boolean = true): any {
    const options = {
        headers: headers
    };
    // if (authenticated) {
    //   this.authService.injectAuthHeaders(options.headers);
    // }
    return options;
}

  function httpGet<T>(url: string, options: any, successCallback?: (value: T) => T): Promise<any> {
    options["observe"] = "response"; // not sure what this does?
  
    const request = axios({
      method: 'get',
      url: url,
      data: {
        options: options
      }
    })
    return request
    .then(result => {
      if (successCallback) {
        console.log('what is this ?' + result)
        return result;
      }
      else {
        return result;
      }
    })
    .catch(error => console.log(error)); // handle error state
  }

  // New getApis function in React
  export function getApis(): Promise<Api[]> {
    // var cachedApis = [];
    console.info("[ApisService] Getting all APIs");
    console.log('did it make it here??');

    const listApisUrl: string = endpoint("/designs");
    const options: any = optionsFunc({ "Accept": "application/json"});

    console.info("[ApisService] Fetching API list: %s", listApisUrl);
    return httpGet<Api[]>(listApisUrl, options, (apis) => {
      // cachedApis = apis;
      return apis;
    })
  }

// export function user(): User {
//   return;
//   // return this.authService.getAuthenticatedUserNow();
// }

  // /**
  //  * @see ApisService.getApis
  //  */
  // public getApis(): Promise<Api[]> {
  //   console.info("[ApisService] Getting all APIs");

  //   let listApisUrl: string = this.endpoint("/designs");
  //   let options: any = this.options({ "Accept": "application/json" });

  //   console.info("[ApisService] Fetching API list: %s", listApisUrl);
  //   return this.httpGet<Api[]>(listApisUrl, options, (apis) => {
  //       this.cachedApis = apis;
  //       return apis;
  //   });
  // }
// }

