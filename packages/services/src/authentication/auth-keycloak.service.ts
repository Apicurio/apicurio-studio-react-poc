/**
 * @license
 * Copyright 2019 Red Hat
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {IAuthenticationService} from "./auth.service";
import {User} from "@apicurio/models";
import {ConfigService} from "../config/config.service";
import {Topic} from "apicurio-ts-core";

/**
 * A version of the authentication service that uses keycloak.js to provide
 * authentication services.
 */
export class KeycloakAuthenticationService extends IAuthenticationService {

    private authenticatedTopic: Topic<boolean> = new Topic<boolean>();
    private user: User;

    private keycloak: any;

    /**
     * Constructor.
     * @param config
     */
    constructor(private config: ConfigService) {
        super();
        const w: any = window;
        this.keycloak = w.keycloak;

        // console.info("Token: %s", JSON.stringify(this.keycloak.tokenParsed, null, 2));
        // console.info("ID Token: %s", JSON.stringify(this.keycloak.idTokenParsed, null, 2));
        // console.info("Access Token: %s", this.keycloak.token);

        const user: User = new User();
        user.name = this.keycloak.tokenParsed.name;
        user.login = this.keycloak.tokenParsed.preferred_username;
        user.email = this.keycloak.tokenParsed.email;

        this.authenticatedTopic.send(true);
        this.user = user;

        // Periodically refresh the token
        // TODO run this outsize NgZone using zone.runOutsideAngular() : https://angular.io/api/core/NgZone
        setInterval(() => {
            this.keycloak.updateToken(30);
        }, 30000);
    }

    /**
     * Returns the observable for is/isnot authenticated.
     * 
     */
    public isAuthenticated(): boolean {
        return this.authenticatedTopic.getValue();
    }

    /**
     * Returns the currently authenticated user.
     * 
     */
    public getAuthenticatedUserNow(): User {
        return this.user;
    }

    /**
     * Returns the topic to listen for auth changes.
     */
    public authenticated(): Topic<boolean> {
        return this.authenticatedTopic;
    }

    /**
     * Not supported.
     * @param user
     * @param credential
     */
    public login(user: string, credential: any): Promise<User> {
        throw new Error("Not supported.");
    }

    /**
     * Logout.
     */
    public logout(): void {
        this.keycloak.logout({ redirectUri: location.href });
    }

    /**
     * Called to inject authentication headers into a remote API call.
     * @param headers
     */
    public injectAuthHeaders(headers: {[header: string]: string}): void {
        const authHeader: string = "bearer " + this.keycloak.token;
        headers.Authorization = authHeader;
    }

    /**
     * Called to return the keycloak access token.
     * 
     */
    public getAuthenticationSecret(): string {
        return this.keycloak.token;
    }

}
