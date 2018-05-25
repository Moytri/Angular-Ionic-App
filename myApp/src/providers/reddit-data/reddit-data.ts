import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';




@Injectable()
export class RedditDataProvider {

  private dataUrl = '../assets/data/test.json';

  constructor(public http: Http) {
    console.log('Hello RedditDataProvider Provider');
  }

    getLocalData(): Observable<string[]> {

        return this.http.get(this.dataUrl)

            .map(this.extractData);

            //.pipe(catchError(this.handleError));

    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }



    /*private handleError(error: any) {

        return throwError(JSON.stringify(error))

    }*/

}
