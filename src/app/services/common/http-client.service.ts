import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string ) {}

  private url(requestParameters: Partial<RequestParameters>): string{
    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl}/${requestParameters.controller}${requestParameters.action ?`/${requestParameters.action}` : ""}`;


  }



  get<T>(requestParameters: Partial<RequestParameters>, id?:string): Observable<T>{
    let url:string = "";
    if(requestParameters.fullEndPoint)
    url = requestParameters.fullEndPoint;
    else
    url = `${this.url(requestParameters)}${id ? `/${id}` : ""}${requestParameters.querystring ? `?${requestParameters.querystring}` : ""}`;
    return this.httpClient.get<T>(url, {headers: requestParameters.header});



  }
  post<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T>{
    let url: string = "";
    if(requestParameters.fullEndPoint)
    url = requestParameters.fullEndPoint;
    else
    url = `${this.url(requestParameters)}${requestParameters.querystring ? `?${requestParameters.querystring}`: ""}`
    return this.httpClient.post<T>(url, body, {headers: requestParameters.header});

  }
  put<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T>{
    let url: string ="";
    if(requestParameters.fullEndPoint)
    url = requestParameters.fullEndPoint;
    else
    url = `${this.url(requestParameters)}${requestParameters.querystring ? `?${requestParameters.querystring}`: ""}`;
    return this.httpClient.put<T>(url, body, {headers:requestParameters.header});

  }
  // Delete dikkat et hatalı olabilir silme işlemi başarılı olmasına rağmen hata oluşturuyor
  delete<T>(requestParameters: Partial<RequestParameters>, id: string): Observable<T>{
    let url:string = "";
    if(requestParameters.fullEndPoint)
    url = requestParameters.fullEndPoint;
    else
    url = `${this.url(requestParameters)}/${id}${requestParameters.querystring ? `?${requestParameters.querystring}`: ""}`;
    return this.httpClient.delete<T>(url, {headers:requestParameters.header});

  }

}

export class RequestParameters{
  controller?: string;
  action?: string;
  querystring?:string;
  header?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?:string;




}




//url = `${this.url(requestParameters)}${id ? `/${id}` : ""}${requestParameters.querystring ? `?${requestParameters.querystring}` : ""}`;
    // url = `${this.url(requestParameters)}${requestParameters.querystring ? `?${requestParameters.querystring}`: ""}`
    // ${requestParameters.querystring ? `?${requestParameters.querystring}`:""}
    //url = `${this.url(requestParameters)} ${id ? `/${id}`: ""}`;
