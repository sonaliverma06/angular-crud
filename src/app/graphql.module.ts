import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri:'http://192.168.1.54:8001/graphql',
            headers:  new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem('token')}`,
           }) ,
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
  //   constructor(httpLink: HttpLink) {
  //     const uri = 'http://192.168.1.54:8001/graphql'; // Replace with your GraphQL endpoint
  //     const http = httpLink.create({ uri });
  //     const client = new ApolloClient({
  //       link: http,
  //       cache: new InMemoryCache(),
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //       },
  //     });
  //     return { provide: APOLLO_OPTIONS, useValue: client,  };
  //   }
}
