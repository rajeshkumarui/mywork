'use client'
import { gql, useQuery } from '@apollo/client';
import { usePathname } from 'next/navigation';

export function MyComponent() {
    const pathname = usePathname();

    const { loading, error, data } = useQuery(gql`  {
    countries {
      name
      capital
      currency
      code
    }
  }`, {
        variables: {},
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong...</p>;
    let sliceCounty = data.countries.slice(0, 30);
    return (
        <div>
            <h1 className="text-xl font-bold">I am a Apollo Client</h1>
            <p>Current pathname: <span className="font-bold">{pathname}</span></p><br/>
            <table>
                <tr>
                    <th>Country Name</th>
                    <th>Country Capital</th>
                    <th>Country Currency</th>
                    <th>Country Code</th>
                </tr>
           
            {
                
                sliceCounty &&
                Array.isArray(sliceCounty) &&
                sliceCounty.map((user) => (
                    <tr className='user-container' key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.capital}</td>
                        <td>{user.currency}</td>
                        <td>{user.code}</td>
                        </tr>
                    
                ))
            }
            </table>
        </div>
    )
}