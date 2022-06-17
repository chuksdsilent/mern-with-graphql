import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "./queries/clientsqueries";
import { Spinner } from "./Spinner";

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  console.log(data.clients);
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.clients.map(client => (
                <ClientRow key={client.id} client={client} />
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};
