import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { gql } from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class MyGraphqlService {
  constructor(private apollo: Apollo) {}

  public getSomeData(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetPosts {
          getPosts {
            id
            image
            title
            description
            metatitle
            metadescription
            status
            users {
              id
              email
              username
              firstname
              city
            }
          }
        }
      `,
    });
  }
}
