import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

// shared
import { MapperUtils } from '../+shared/utils/mapper-utils';
import { ApiService } from '../+shared/services/api.service';
import { PostModel } from '../+shared/models/post.model';
import { API } from '../+shared/utils/const';

@Injectable()
export class BlogService {

  constructor(
    private apiService: ApiService
  ) {}

  /**
   *
   *
   * @returns {Promise<any>}
   *
   * @memberof BlogService
   */
  callPostsApi(page: number, id?: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = id ? `${API.URL.POSTS}/${id}` : API.URL.POSTS;
      const params = {
        page,
        per: API.SETTING.PER,
        _embed: null
      };

      this.apiService.get(url, params).then(
        result => {
          const rtn = MapperUtils.deserialize(PostModel, result);          
          resolve(rtn);
        },
        err => reject(err)
      );
    });
  }
}
