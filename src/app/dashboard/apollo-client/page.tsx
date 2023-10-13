// Container component
"use client"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {MyComponent} from './usequery'
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  headers: {},
  cache: new InMemoryCache(),
});

export default function MyApp() {
  return (
    <ApolloProvider client={client}>
      <MyComponent />
    </ApolloProvider>
  )
}