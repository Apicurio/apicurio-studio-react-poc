import {CurrentUserService, KeycloakAuthenticationService, ConfigService} from  '@apicurio/services';

// Initialize services.

export class UserServices {

    private static singleton: UserServices
    public configService: ConfigService = new ConfigService();
    public authenticationService : KeycloakAuthenticationService = new KeycloakAuthenticationService(this.configService);;
    public currentUserApisService: CurrentUserService = new CurrentUserService(this.authenticationService, this.configService);;

    constructor() {
        
    }

    static getInstance() {
        if (UserServices.singleton === undefined) {
            UserServices.singleton = new UserServices();
        }

        return UserServices.singleton;
    }
}