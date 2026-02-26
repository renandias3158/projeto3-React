import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
  
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput placeholder="Usuário" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} />

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Lista')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Usuário')}
      >
        <Text style={styles.link}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}


function ListaScreen({ navigation }) {

  const contatos = [
    { id: '1', nome: 'Marcos Andrade', telefone: '81 988553424' },
    { id: '2', nome: 'Patrícia Tavares', telefone: '81 998765332' },
    { id: '3', nome: 'Rodrigo Antunes', telefone: '81 987765525' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LISTA DE CONTATOS</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate('AlterarContato')}
  >
    <Image
  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
  style={styles.avatar}
/>

    <View style={styles.infoContainer}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text>{item.telefone}</Text>
    </View>
  </TouchableOpacity>
)}
      />
    </View>
  );
}


function CadastroUsuarioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO DE USUÁRIOS</Text>

      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="CPF" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}


function CadastroContatoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO DE CONTATO</Text>

      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Telefone" style={styles.input} />

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}


function AlterarContatoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALTERAÇÃO / EXCLUSÃO</Text>

      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Telefone" style={styles.input} />

      <TouchableOpacity style={styles.warningButton}>
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dangerButton}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen 
        name="Lista" 
        component={ListaScreen}
        options={({ navigation }) => ({
          headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Contato')}
            style={{ marginRight: 10 }}
          >
          <Text style={{ fontSize: 28, color: '#ffffff', backgroundColor:'#2E86DE', padding: 13, borderRadius:10, textAlign: 'center' }}>+</Text>
          </TouchableOpacity>
                  )
              })}
          />
        <Stack.Screen name="Usuário" component={CadastroUsuarioScreen} />
        <Stack.Screen name="Contato" component={CadastroContatoScreen} />
        <Stack.Screen name="AlterarContato" component={AlterarContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },

  primaryButton: {
    backgroundColor: '#2E86DE',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },

  warningButton: {
    backgroundColor: '#2E86DE',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },

  dangerButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 8
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  link: {
    backgroundColor: '#ff0000',
    color: '#fff',
    fontWeight:'bold',
    textAlign: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10
  },

  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  nome: {
    fontWeight: 'bold',
    fontSize: 16
  },

  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2E86DE',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  plus: {
    color: '#fff',
    fontSize: 30
  },

  card: {
  backgroundColor: '#f2f2f2',
  padding: 15,
  borderRadius: 10,
  marginBottom: 10,
  flexDirection: 'row',
  alignItems: 'center'
},

avatar: {
  width: 50,
  height: 50,
  borderRadius: 25,
  marginRight: 15
},

infoContainer: {
  flex: 1
}
});
