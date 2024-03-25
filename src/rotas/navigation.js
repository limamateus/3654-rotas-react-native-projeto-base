import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../paginas/Home";
import Login from "../paginas/Login"
import Cadastro from "../paginas/Cadastro";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListaPets from '../paginas/ListaPets'
import Mensagem from '../paginas/Mensagem'
import { Image } from "react-native";
import Sobre from '../paginas/Sobre'
import Perfil from '../paginas/Perfil'
import { createDrawerNavigator } from '@react-navigation/drawer';

// Tipos de Navegações
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer =  createDrawerNavigator();


function DrawerRoutes(){
    return(
        <Drawer.Navigator 
        screenOptions={{
            drawerStyle:{ // Estilizando o Menu 
                backgroundColor:'#36D6AD' // Cor do background
            },
            drawerLabelStyle:{ // Estilizando o texto do menu
                color:'#FFF', // cor do texto
                fontSize:14, // tamanho do texto
                fontFamily:'PoppinsRegular', // tipo de fonte 
                fontWeight:'400', // Não sei explicar,mais é como se fosse para deixar em negrito 
                lineHeight:20
            }
        }}
        
        >
            <Drawer.Screen
            name='Lista de Pets'
            component={TabRoutes}
                options={{
                    drawerLabel:'Pets para adoção',
                    drawerIcon: () =>(
                        <Image 
                         source={require('../assets/pets.png')}
                         style={{width:20,height:20}}
                         />
                    ),
                    headerTransparent:true,
                    title:''
                }}
            
            />
            <Drawer.Screen
            name='Perfil'
            component={Perfil}
            options={{
                drawerLabel:'Perfil',
                drawerIcon: () => (
                    <Image
                    source={require('../assets/settings.png')}
                    style={{width:20,height:20}}
                    />
                ),
                headerTransparent:true,
                title:''
            }}
            />
            <Drawer.Screen
            name='Sair'
            component={Home}
            options={{
                drawerLabel:'Sair',
                drawerIcon: () => (
                    <Image
                    source={require('../assets/logout.png')}
                    style={{width:20,height:20}}

                    />
                ),
                headerTransparent:true,
                title:''
            }}
            />
        </Drawer.Navigator>
    )
}

function TabRoutes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown:false,

        }}
        >
            <Tab.Screen 
            name="Lista de Pets" 
            component={ListaPets}
            options={{
                    tabBarIcon: () => (
                        <Image 
                            source={require('../assets/pets-green.png')}
                            style={{width:20,height:20}}
                            />
                    )
            }}
            />
            <Tab.Screen 
            name="Mensagem" 
            component={Mensagem}
            options={{
                tabBarIcon: () =>(
                    <Image
                        source={require('../assets/mensagens.png')}
                        style={{width:20,height:20}}
                        />
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation (){
    return(
        <NavigationContainer>
            <Stack.Navigator
             initialRouteName="Home" // definir rota padrão
             screenOptions={{ // Dessa forma eu estou definindo para todas as paginas 
                headerTitle:'', // Remover o titulo da pagina
                headerShown:false // Remover a barra 
             }}
             >
                <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                  //  headerTitle:'', //Tirar o titulo
                    //headerShown: false // Removo o Header
                }}
                />
                <Stack.Screen
                 name="Login" 
                 component={Login}
                 />

                <Stack.Screen 
                name="Cadastro"
                component={Cadastro}
                />

                <Stack.Screen
                 name="Drawer" 
                 component={DrawerRoutes}  // Alinhamento de rotas, ou seja, estou colocando rotas em baixo de outra rota
                  options={{
                    
                  }}  
                /> 

                <Stack.Screen 
                name="Sobre"
                component={Sobre}
                />
            </Stack.Navigator>
        
        </NavigationContainer>
    )
}