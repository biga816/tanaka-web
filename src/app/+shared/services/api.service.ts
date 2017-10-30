// Angular Modules
import { Injectable } from '@angular/core';
// import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';

/**
 * Api Service
 *
 * @export
 * @class ApiService
 */
@Injectable()
export class ApiService {
  /**
   * Creates an instance of ApiService.
   *
   * @param {HttpClient} httpClient
   *
   * @memberOf ApiService
   */
  constructor(
    // private http: Http
    private httpClient: HttpClient
  ) {
    this.httpClient = httpClient;
  }

  /**
   * Http get from api
   *
   * @param {string} url
   * @param {URLSearchParams} [params]
   * @returns
   *
   * @memberOf ApiService
   */
  // public get(url: string, params?: URLSearchParams): Promise<any> {
  public get(url: string, params?: Object): Promise<any> {
    const self = this;
    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.set(key, params[key]);
      });
    }

    return new Promise((resolve, reject) => {
      let options = this.getOptions();
      options = Object.assign(options, { params: httpParams });
      this.httpClient.get(url, options)
        .subscribe(
          data => self.success(data, resolve),
          err => self.fail(err, reject)
        );
    });
  }

  /**
   * Http post from api
   *
   * @param {string} url
   * @param {Object} body
   * @returns
   *
   * @memberOf ApiService
   */
  public post(url: string, body: Object): Promise<any> {
    const self = this;

    return new Promise((resolve, reject) => {
      const options = this.getOptions();
      const bodyJson = JSON.stringify(body);
      this.httpClient.post(url, bodyJson, options)
        .subscribe(
          data => self.success(data, resolve),
          err => self.fail(err, reject)
        );
    });
  }

  /**
   * Http post from api
   *
   * @param {string} url
   * @param {Object} body
   * @returns
   *
   * @memberOf ApiService
   */
  public put(url: string, body: Object): Promise<any> {
    const self = this;

    return new Promise((resolve, reject) => {
      const options = this.getOptions();
      const bodyJson = JSON.stringify(body);
      this.httpClient.put(url, bodyJson, options)
        .subscribe(
          data => self.success(data, resolve),
          err => self.fail(err, reject)
        );
    });
  }

  /**
   * Http delete from api
   *
   * @param {string} url
   * @param {URLSearchParams} [params]
   * @returns
   *
   * @memberOf ApiService
   */
  public delete(url: string, id: String | Number): Promise<any> {
    const self = this;

    return new Promise((resolve, reject) => {
      const options = this.getOptions();
      this.httpClient.delete(`${url}/${id}`, options)
        .subscribe(
          data => self.success(data, resolve),
          err => self.fail(err, reject)
        );
    });
  }

  /**
   * Success function of http request
   *
   * @private
   * @param {*} data
   * @param {Function} resolve
   *
   * @memberOf ApiService
   */
  private success(data: any, resolve: Function): void {
    resolve(data);
  }

  /**
   * Fail function of http request
   *
   * @private
   * @param {*} err
   * @param {Function} reject
   *
   * @memberOf ApiService
   */
  private fail(err: any, reject: Function): void {
    reject(err);
    throw new Error(err.json().message);
  }

  /**
   * Get params
   *
   * @param {RequestOptions} options
   *
   * @memberOf ApiService
   */
  private getOptions(): Object {
    // set http header
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'test'
      })
    };
  }
}
