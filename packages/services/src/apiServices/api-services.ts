import {Api} from "../models/api.model";
import {VersionedAck} from "../models/ack.model";
import {ApiEditorUser} from "../models/editor-user.model";
import {AbstractHubService} from "./hub";
import {ConfigService} from "./config.service";
import {IAuthenticationService} from "./auth.service";
import {StorageError} from "../models/storageError.model";
import {DeferredAction} from "../models/deferred.model";


export interface IConnectionHandler {
    // Called when the connection is established.
    onConnected(): void;
    // Called when the connection is closed properly.
    onClosed(): void;
    // Called when the connection drops unexpectedly.
    onDisconnected(closeCode: number): void;
}

export interface ICommandHandler {
    onCommand(command: OtCommand): void;
    onAck(ack: VersionedAck): void;
    onDeferredAction(deferred: DeferredAction): void;
    onStorageError(storageError: StorageError): void;
    onUndo(contentVersion: number): void;
    onRedo(contentVersion: number): void;
}

export interface IActivityHandler {
    onJoin(user: ApiEditorUser): void;
    onLeave(user: ApiEditorUser): void;
    onSelection(user: ApiEditorUser, selection: string): void;
}

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
  constructor(http: HttpClient, authService: IAuthenticationService, config: ConfigService) {
      super(http, authService, config);
  }



  // New getApis function in React
  getApis() {
    console.info("[ApisService] Getting all APIs");

    let listApisUrl = this.endpoint("/designs");
    let options = this.options({ "Accept": "application/json"});

    console.info("[ApisService] Fetching API list: %s", listApisUrl);
    return this.httpGet(listApisUrl, options, (apis) => {
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
