import { HttpClient, HttpParams } from '@angular/common/http';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import {Injectable} from '@angular/core'
import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../app.error-handler';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) {}

  // Coletando Lista de Restaurants

  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined
    if (search) {
      params = new HttpParams().append('q', search)
    }
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})

    }

    // Coletando Listas de Restaurantes por ID

    restaurantById(id: string): Observable<Restaurant> {
      return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    // Coletando Lista de Reviews dos Restaurantes

    reviewsOfRestaurant(id: string): Observable<any> {
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    // Coletando Informações do Menu

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
      return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }

 }
