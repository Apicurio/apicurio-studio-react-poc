import {User, ApiDesignChange} from "@apicurio/models";
import {ConfigService} from "../config/config.service";
import {IAuthenticationService} from "../authentication/auth.service";
import {AbstractHubService} from "./hub";
import { AxiosRequestConfig } from "axios";

/**
 * An implementation of the Linked Accounts service that uses the Apicurio Studio back-end (Hub API) service
 * to store and retrieve relevant information for the user.
 */
export class CurrentUserService extends AbstractHubService {

    /**
     * Constructor.
     * @param authService
     * @param config
     */
    constructor(authService: IAuthenticationService, config: ConfigService) {
        super(authService, config);
    }

    /**
     * Returns the current user's activity.
     */
    public getActivity(start: number, end: number): Promise<ApiDesignChange[]> {
        const user: User = this.authService.getAuthenticatedUserNow();

        console.info("[CurrentUserService] Getting all activity for user %s", user.login);

        const activityUrl: string = this.endpoint("/currentuser/activity", {}, {
            start: start,
            end: end
        });

        const options: AxiosRequestConfig = this.options({ "Accept": "application/json", 'Access-Control-Allow-Origin': '*' });

        console.info("[CurrentUserService] Fetching user activity: %s", activityUrl);
        return this.httpGet<ApiDesignChange[]>(activityUrl, options, (resp) => {
            return resp as ApiDesignChange[];
        });
    }
}
