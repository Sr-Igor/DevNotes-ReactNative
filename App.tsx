import { NavigationContainer } from '@react-navigation/native';
import DefaultStack from './src/navigators/Stack';

import { Provider as ProviderRedux } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <ProviderRedux store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <DefaultStack />
        </NavigationContainer>
      </PersistGate>
    </ProviderRedux>
  );
};

export default App;
