import { useFonts } from 'expo-font';
import { 
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    'samsung-light': require('../assets/fonts/samsungsharpsans.otf'),
    'samsung-medium': require('../assets/fonts/samsungsharpsans-medium.otf'),
    'samsung-bold': require('../assets/fonts/samsungsharpsans-bold.otf'),
    'Poppins-Light': Poppins_300Light,
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-Bold': Poppins_700Bold,
  });

  return fontsLoaded;
}