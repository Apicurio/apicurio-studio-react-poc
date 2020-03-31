import {ApisService, CurrentUserService, KeycloakAuthenticationService, ConfigService} from  '@apicurio/services';

// Initialize services.

export class Services {
    static getInstance() {
        if (Services.singleton === undefined) {
            Services.singleton = new Services();
        }

        return Services.singleton;
    }

    private static singleton: Services;
    public configService: ConfigService = new ConfigService();
    public autheticationService : KeycloakAuthenticationService = new KeycloakAuthenticationService(this.configService);
    public apisService: ApisService = new ApisService(this.autheticationService, this.configService);
    public currentUserService: CurrentUserService = new CurrentUserService(this.autheticationService, this.configService);
}