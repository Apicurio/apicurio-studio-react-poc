import {Api, ApiDefinition, EditableApiDefinition} from "../../../models/src/api.model";
import {ApiContributor, ApiContributors} from "../../../models/src/api-contributors.model";
import {NewApi} from "../../../models/src/new-api.model";
import {ImportApi} from "../../../models/src/import-api.model";
import {ICommand, MarshallCompat, OtCommand} from "apicurio-data-models";
import {VersionedAck} from "../../../models/src/ack.model";
import {ApiCollaborator} from "../../../models/src/api-collaborator.model";
import {Invitation} from "../../../models/src/invitation.model";
import {ApiEditorUser} from "../../../models/src/editor-user.model";
import {ApiDesignChange} from "../../../models/src/api-design-change.model";
import {AbstractHubService} from "./hub";
import {PublishApi} from "../../../models/src/publish-api.model";
// import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {ConfigService} from "../config/config.service";
import {IAuthenticationService} from "../authentication/auth.service";
import {CodegenProject} from "../../../models/src/codegen-project.model";
import {NewCodegenProject} from "../../../models/src/new-codegen-project.model";
import {UpdateCodegenProject} from "../../../models/src/update-codegen-project.model";
// import {Injectable} from "@angular/core";
import {ApiPublication} from "../../../models/src/api-publication.model";
import {UpdateCollaborator} from "../../../models/src/update-collaborator.model";
import {ApiMock, MockReference} from "../../../models/src/mock-api.model";
// import {HttpUtils} from "../util/common";
import {StorageError} from "../../../models/src/storageError.model";
import {DeferredAction} from "../../../models/src/deferred.model";
import React from "react";
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

export class ApisService extends AbstractHubService {

  private cachedApis: Api[] = null;

  /**
   * Constructor.
   * @param http
   * @param authService
   * @param config
   */
  // constructor(authService: IAuthenticationService, config: ConfigService) {
  //     super(authService, config);
  // }

  // New getApis function in React
  public getApis(): Promise<Api[]> {
    console.info("[ApisService] Getting all APIs");
    console.log('did it make it here??');

    const listApisUrl = this.endpoint("/designs");
    const options = this.options({ "Accept": "application/json"});

    console.info("[ApisService] Fetching API list: %s", listApisUrl);
    return this.httpGet<Api[]>(listApisUrl, options, (apis) => {
      this.cachedApis = apis;
      return apis;
    })
  }

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
}
