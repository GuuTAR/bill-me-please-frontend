import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { BackendConfig } from '@/types/BackendConfig'

import { ResponseData } from '@/types/ResponseData'
import { STATUS_CODE } from '@/enum/global'

export class ConfigAPI {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create()
  }

  public getBackendConfig = async (): Promise<BackendConfig> => {
    try {
      const result: AxiosResponse<ResponseData<BackendConfig>> =
        await this.api.get<ResponseData<BackendConfig>>('/api/config/backend')
      if (result.status === STATUS_CODE.OK) {
        return (
          result.data.body ?? {
            backendUrl: '',
            apiTimeout: 5000,
          }
        )
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error('Error in GET /api/config/backend:', (error as Error).message)
      return {
        backendUrl: '',
        apiTimeout: 5000,
      }
    }
  }
}
