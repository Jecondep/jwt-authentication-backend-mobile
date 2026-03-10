import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store'; // Librería de persistencia

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  // D. Persistencia de Sesión: Cargar token al iniciar
  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await SecureStore.getItemAsync('userToken');
      if (storedToken) setToken(storedToken);
    };
    checkToken();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://TU_IP_LOCAL:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.token) {
        await SecureStore.setItemAsync('userToken', data.token); // Guardar
        setToken(data.token);
        Alert.alert("Éxito", "Sesión iniciada");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo conectar al servidor");
    }
  };

  return (
    <View style={{ padding: 50 }}>
      {!token ? (
        <>
          <TextInput placeholder="Usuario" onChangeText={setUsername} />
          <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
          <Button title="Entrar" onPress={handleLogin} />
        </>
      ) : (
        <Text>Bienvenido a SecureNode. Token activo.</Text>
      )}
    </View>
  );
         }
