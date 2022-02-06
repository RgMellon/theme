import { StatusBar } from 'expo-status-bar';
import { Home } from './src/pages/Home';
import { Theme } from './src/templates/theme';
import AppProvider from './src/contexts';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppProvider>
      <Theme>
        <Home />
      </Theme>
      </AppProvider>
    </>
  );
}



