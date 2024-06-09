import React, { useState, useEffect } from 'react';
import { Text, Button, TextInput, Alert, StyleSheet, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [newName, setNewName] = useState('');
    const [email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const loadUserData = async () => {
        setRefreshing(true);
        const token = await AsyncStorage.getItem('token');
        const userInfo = await Api.getUser(token);
        if (userInfo && userInfo.data) {
            setName(userInfo.data.name);
            setEmail(userInfo.data.email);
        }
        setRefreshing(false);
    };

    useEffect(() => {
        loadUserData();
    }, []);

    const handleUpdateName = async () => {
        if (!newName) {
            Alert.alert('Erro', 'Nome não pode ser vazio');
            return;
        }

        setLoading(true);
        const body = {
            name: newName
        };

        const json = await Api.updateUser(body);
        setLoading(false);

        if (json.error) {
            handleError(json.error);
        } else {
            Alert.alert('Sucesso', 'Nome atualizado com sucesso!');
            setName(newName);
            setNewName('');
        }
    };

    const handleUpdateEmail = async () => {
        if (!newEmail) {
            Alert.alert('Erro', 'E-mail não pode ser vazio');
            return;
        }

        setLoading(true);
        const body = {
            email: newEmail
        };

        const json = await Api.updateUser(body);
        setLoading(false);

        if (json.error) {
            handleError(json.error);
        } else {
            Alert.alert('Sucesso', 'E-mail atualizado com sucesso!');
            setEmail(newEmail);
            setNewEmail('');
        }
    };

    const handleUpdatePassword = async () => {
        Alert.alert('Aviso', 'Entre em contato com o administrador para alteração de senha');
    };

    const handleError = (error) => {
        if (typeof error === 'object') {
            // Se o erro for um objeto, converta-o para uma string legível
            Alert.alert('Erro', JSON.stringify(error));
        } else {
            Alert.alert('Erro', error);
        }
    };

    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    };

    const onRefresh = () => {
        loadUserData();
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor="#C2995B"
                />
            }
        >
            <Text style={styles.title}>Atualizar Informações</Text>

           
                <View style={styles.row}>
                    <Text style={[styles.label2, styles.currentText2]}>Nome Atual:</Text>
                    <TextInput
                        value={name}
                        editable={false}
                        style={[styles.input2, styles.currentBackground2]}
                    />
                    
                </View>

            <Text style={[styles.label, styles.currentText]}>Novo Nome:</Text>
            <TextInput
                placeholder="Novo Nome"
                value={newName}
                onChangeText={t => setNewName(t)}
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleUpdateName} disabled={loading}>
                    <Text style={styles.buttonText}>Atualizar Nome</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                    <Text style={[styles.label2, styles.currentText2]}>Nome Atual:</Text>
                    <TextInput
                        value={email}
                        editable={false}
                        style={[styles.input2, styles.currentBackground2]}
                    />
                    
                </View>

            <Text style={[styles.label, styles.currentText]}>Novo E-mail</Text>
            <TextInput
                placeholder="Novo E-mail"
                value={newEmail}
                onChangeText={t => setNewEmail(t)}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleUpdateEmail} disabled={loading}>
                    <Text style={styles.buttonText}>Atualizar E-mail</Text>
                </TouchableOpacity>
            </View>
{/*
            <Text style={[styles.label, styles.currentText]}>Senha Atual</Text>
            <TextInput
                placeholder="Indisponível no momento"
                editable={false}
                style={[styles.input, styles.currentBackground]}
                placeholderTextColor="#F6E9C3"
            />
            */}

            <Text style={[styles.label, styles.currentText]}>Nova Senha</Text>
            <TextInput
                placeholder="Indisponível no momento"
                editable={false}
                style={[styles.input, styles.currentBackground]}
                placeholderTextColor="#F6E9C3"
            />
{/*
            <Text style={[styles.label, styles.currentText]}>Confirmar Nova Senha</Text>
            <TextInput
                placeholder="Indisponível no momento"
                editable={false}
                style={[styles.input, styles.currentBackground]}
                placeholderTextColor="#F6E9C3"
            />
            */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleUpdatePassword} disabled={loading}>
                    <Text style={styles.buttonText}>Atualizar Senha</Text>
                </TouchableOpacity>
            </View>

            <Text>  </Text>
            <Button title="Sair" onPress={handleLogoutClick} color="#C2995B" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#141416',
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#C2995B',
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20
    },
    label: {
        fontSize: 16,
        color: '#C2995B',
        fontWeight: 'bold',
        marginRight: 10
    },
    label2: {
        fontSize: 16,
        color: '#C2995B',
        fontWeight: 'bold',
        marginRight: 10,
        marginBottom: 1 // Reduzindo o espaço entre a exibição do nome atual e os itens abaixo
    },
    input: {
        borderWidth: 1,
        borderColor: '#C2995B',
        backgroundColor: '#F6E9C3',
        borderRadius: 4,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
        color: '#C2995B'
    },
    input2: {
        borderWidth: 0,
        backgroundColor: '#464A4C',
        borderRadius: 4,
        padding: 10,
        marginBottom: 1, // Reduzindo o espaço entre a exibição do nome atual e os itens abaixo
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F6E9C3'
    },
    currentText: {
        color: '#C2995B',
        fontWeight: 'bold'
    },
    currentText2: {
        color: '#C2995B',
        fontWeight: 'bold',
        marginRight: 10
    },
    // Parametros do fundo do local de inserir as senhas
    currentBackground: {
        backgroundColor: '#141416'
    },
    // Parametros do fundo do local onde são exibidas as informações atuais do usuario
    currentBackground2: {
        backgroundColor: '#141416'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20
        
    },
    // Parametros do Texto dos Botoes
    buttonText: {
        borderWidth: 1,
        borderColor: '#C2995B',
        color: '#C2995B',
        fontSize: 16,
        paddingHorizontal: 20 
    }
});
