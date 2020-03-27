import {ApisService, KeycloakAuthenticationService, ConfigService} from  '@apicurio/services';

// Initialize services.

export class Services {

    private static singleton: Services
    public configService: ConfigService = new ConfigService();
    public authenticationService : KeycloakAuthenticationService = new KeycloakAuthenticationService(this.configService);;
    public apisService: ApisService = new ApisService(this.authenticationService, this.configService);;

    constructor() {
        
    }

    static getInstance() {
        if (Services.singleton === undefined) {
            Services.singleton = new Services();
        }

        return Services.singleton;
    }
}