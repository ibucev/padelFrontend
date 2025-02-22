/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPlayer } from '../fn/players/create-player';
import { CreatePlayer$Params } from '../fn/players/create-player';
import { deletePlayer } from '../fn/players/delete-player';
import { DeletePlayer$Params } from '../fn/players/delete-player';
import { editPlayer } from '../fn/players/edit-player';
import { EditPlayer$Params } from '../fn/players/edit-player';
import { getAllPlayers } from '../fn/players/get-all-players';
import { GetAllPlayers$Params } from '../fn/players/get-all-players';
import { getPlayerById } from '../fn/players/get-player-by-id';
import { GetPlayerById$Params } from '../fn/players/get-player-by-id';
import { Player } from '../models/player';

@Injectable({ providedIn: 'root' })
export class PlayersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getPlayerById()` */
  static readonly GetPlayerByIdPath = '/api/v1/players/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPlayerById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPlayerById$Response(params: GetPlayerById$Params, context?: HttpContext): Observable<StrictHttpResponse<Player>> {
    return getPlayerById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPlayerById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPlayerById(params: GetPlayerById$Params, context?: HttpContext): Observable<Player> {
    return this.getPlayerById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Player>): Player => r.body)
    );
  }

  /** Path part for operation `editPlayer()` */
  static readonly EditPlayerPath = '/api/v1/players/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editPlayer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editPlayer$Response(params: EditPlayer$Params, context?: HttpContext): Observable<StrictHttpResponse<Player>> {
    return editPlayer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `editPlayer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editPlayer(params: EditPlayer$Params, context?: HttpContext): Observable<Player> {
    return this.editPlayer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Player>): Player => r.body)
    );
  }

  /** Path part for operation `deletePlayer()` */
  static readonly DeletePlayerPath = '/api/v1/players/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePlayer()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePlayer$Response(params: DeletePlayer$Params, context?: HttpContext): Observable<StrictHttpResponse<Player>> {
    return deletePlayer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePlayer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePlayer(params: DeletePlayer$Params, context?: HttpContext): Observable<Player> {
    return this.deletePlayer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Player>): Player => r.body)
    );
  }

  /** Path part for operation `getAllPlayers()` */
  static readonly GetAllPlayersPath = '/api/v1/players';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPlayers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPlayers$Response(params?: GetAllPlayers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Player>>> {
    return getAllPlayers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllPlayers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPlayers(params?: GetAllPlayers$Params, context?: HttpContext): Observable<Array<Player>> {
    return this.getAllPlayers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Player>>): Array<Player> => r.body)
    );
  }

  /** Path part for operation `createPlayer()` */
  static readonly CreatePlayerPath = '/api/v1/players';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPlayer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPlayer$Response(params: CreatePlayer$Params, context?: HttpContext): Observable<StrictHttpResponse<Player>> {
    return createPlayer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPlayer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPlayer(params: CreatePlayer$Params, context?: HttpContext): Observable<Player> {
    return this.createPlayer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Player>): Player => r.body)
    );
  }

}
