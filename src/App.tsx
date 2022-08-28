import { ApolloProvider } from '@apollo/client';
import RootContainer from 'containers/RootContainer';
import { BrowserRouter } from 'react-router-dom';
import { client } from 'requests/Configs/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <RootContainer />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
