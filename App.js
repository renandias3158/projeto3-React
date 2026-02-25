import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
  
function HomeScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Home Screen</Text>
<Button title='Contatos' onPress={() => navigation.navigate('Contacts')}>
</Button>
</View>
);
}



function Contacts({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('CadastrarContato')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8922/8922789.png' }}
            style={{ width: 28, height: 28, marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigation.navigate('AlterarContato')}>Pessoa 1</Text>
      <Text onPress={() => navigation.navigate('AlterarContato')}>Pessoa 2</Text>
      <Text onPress={() => navigation.navigate('AlterarContato')}>Pessoa 3</Text>
    </View>
  );
}

function LoginScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Login Screen</Text>
<Button title='Login' onPress={() => navigation.navigate('Home')}>
</Button>
<Button title='Cadastrar' onPress={() => navigation.navigate('signIn')}>
</Button>
</View>
);  
}

function SignIn({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Cadastro</Text>
<Button title='Salvar'></Button>
</View>
);
}

function AlterarContato({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Alterar Contato</Text>
<Button title='Alterar'></Button>
<Button title='Excluir'></Button>
</View>
);
}
function CadastrarContato({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Nome</Text>
<TextInput style={styles.input} placeholder="Nome"/>
<Text>Email</Text>
<TextInput style={styles.input} placeholder="Email"/>
<Text>Telefone</Text>
<TextInput style={styles.input} placeholder="Telefone"/>
<Button title='salvar'></Button>
</View>
);
}

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="signIn" component={SignIn} />
<Stack.Screen name="Contacts" component={Contacts} />
<Stack.Screen name="AlterarContato" component={AlterarContato} />
<Stack.Screen name="CadastrarContato" component={CadastrarContato} />
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default App;
