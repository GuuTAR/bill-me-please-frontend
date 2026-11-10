import { BackendConfig } from '@/types/BackendConfig'

import { ConfigAPI } from '@/api/configApi'

class ConfigService {
  private configApi: ConfigAPI

  constructor() {
    this.configApi = new ConfigAPI()
  }

  public getBeckendConfig = async (): Promise<BackendConfig> => {
    return await this.configApi.getBackendConfig()
  }
}

export const configService = new ConfigService()
