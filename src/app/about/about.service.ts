import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

// shared
import { MapperUtils } from '../+shared/utils/mapper-utils';
import { ApiService } from '../+shared/services/api.service';
import { UserModel } from '../+shared/models/user.model';
import { API } from '../+shared/utils/const';

@Injectable()
export class AboutService {

  constructor(
    private apiService: ApiService
  ) {}

  /**
   *
   *
   * @returns {Promise<any>}
   *
   * @memberof AboutService
   */
  callUserApi(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = `${API.URL.USERS}/${id}`;
      const params = {
        _embed: null
      };

      this.apiService.get(url, params).then(
        result => {
          const rtn = {
            user: MapperUtils.deserialize(UserModel, result.body),
          };

          resolve(rtn);
        },
        err => reject(err)
      );
    });
  }
}
