import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Home Screen</Text>
<Button title='Images' onPress={() => navigation.navigate('Images')}>
</Button>
</View>
);
}


function Images({ navigation }) {
return (
<SafeAreaProvider>
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>.</Text>
    <SafeAreaView style={styles.container}>
<Image
      style={styles.logo}
        source={{
           uri: 'https://limbuscompany.wiki.gg/wiki/LCE_E.G.O::Lantern_Yi_Sang'
        }}
      />
      </SafeAreaView>
</View>
</SafeAreaProvider>
);
}

function LoginScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Login Screen</Text>
<Button title='Home' onPress={() => navigation.navigate('Home')}>
</Button>
<Button title='Forgot password' onPress={() => navigation.navigate('Forgot password')}>
</Button>
</View>
);
}

function ForgotPassword({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Forgot Password</Text>
</View>
);
}

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Forgot password" component={ForgotPassword} />
<Stack.Screen name="Images" component={Images} />
</Stack.Navigator>
</NavigationContainer>
);
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
  }
});

export default App;
