import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../../shared/models/wishItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor( private http : HttpClient) {}

  private getStandardOptions() : any {
    return {
      headers : new HttpHeaders({
        "Content-Type" : "application/json"
      })
    }
  }

  getWishes(){
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject : { format : "xml" }
    })
     return this.http.get('assets/wishes.json',options).pipe(catchError(this.handleError));
  }

  private handleError(error : HttpErrorResponse){
    //console.log(error.status,'othmane')
    if(error.status === 0){
      console.error('client error',error.error)
    }else{
      console.error('server side error',error.message)
    }

    return throwError(()=> new Error('Please try again'));
  }

  private addWish(wish : WishItem){
      let options = this.getStandardOptions();
      options.headers = options.headers.set('Authorization','value');
      this.http.post('/',wish,options);
  }
}
