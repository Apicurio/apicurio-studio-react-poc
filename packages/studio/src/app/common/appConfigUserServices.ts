import {CurrentUserService, KeycloakAuthenticationService, ConfigService} from  '@apicurio/services';
// import {KeycloakAuthenticationService} from '../../../../services/src/authentication/auth-keycloak.service';
// import {ConfigService} from '../../../../services/src/config/config.service';
// import {CurrentUserService} from '../../../../services/src/api-services/current-user-services';

// Initialize services.

export class UserServices {

    private static singleton: UserServices
    public configService: ConfigService = new ConfigService();
    public authenticationService : KeycloakAuthenticationService = new KeycloakAuthenticationService(this.configService);
    public currentUserApisService: CurrentUserService = new CurrentUserService(this.authenticationService, this.configService);

    constructor() {
        
    }

    static getInstance() {
        if (UserServices.singleton === undefined) {
            UserServices.singleton = new UserServices();
        }

        return UserServices.singleton;
    }
}