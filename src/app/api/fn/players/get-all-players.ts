/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Player } from '../../models/player';

export interface GetAllPlayers$Params {
}

export function getAllPlayers(http: HttpClient, rootUrl: string, params?: GetAllPlayers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Player>>> {
  const rb = new RequestBuilder(rootUrl, getAllPlayers.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Player>>;
    })
  );
}

getAllPlayers.PATH = '/api/v1/players';
