// Convert 'any' to type once keycloak.js is converted to typescript.
export type ConfigType =  {
    apis: {
      editingUrl: string,
      hubUrl: string,
      type: string
    },
    auth: any,
    features: any,
    mode: string,
    ui: any,
    user: any
  };