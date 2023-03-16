//React Navigation
import DefaultStack from './src/navigators/Stack';
import { NavigationContainer } from '@react-navigation/native';

//Redux Configs
import { store, persistor } from './src/redux/store';
import { Provider as ProviderRedux } from 'react-redux';
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
