// App.js - Interfaz de Login de SecureNode
import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo de SecureNode */}
        <View style={styles.logoContainer}>
          <View style={styles.shieldIcon}>
             <Text style={{color: 'white', fontSize: 40}}>🛡️</Text>
          </View>
          <Text style={styles.title}>SecureNode</Text>
          <Text style={styles.subtitle}>Secure Access Solutions</Text>
        </View>

        {/* Formulario */}
        <View style={styles.formContainer}>
          <Text style={styles.loginText}>Login to SecureNode</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#999"
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <Text style={styles.signUpText}>
            Don't have an account? <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a192f', // Azul oscuro profundo
  },
  content: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#8892b0',
    fontSize: 16,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Fondo semi-transparente
    padding: 20,
    borderRadius: 15,
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#334155',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#0a192f',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#8892b0',
    textAlign: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#8892b0',
    textAlign: 'center',
    marginTop: 15,
  }
});
