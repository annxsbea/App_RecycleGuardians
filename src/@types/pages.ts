import { StackNavigationProp } from "@react-navigation/stack";
type RootStackParamList = {
    HomeScreen: undefined;
    SignIn: undefined;
    SignUp: undefined;
    Perfil: undefined;
    Recycle: undefined;
    Coleta: undefined;
    Initial: undefined;

};

export type HomeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
export type SignInScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;
export type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;
export type PerfilScreenProp = StackNavigationProp<RootStackParamList, 'Perfil'>;
export type RecycleScreenProp = StackNavigationProp<RootStackParamList, 'Recycle'>;
export type ColetaScreenProp = StackNavigationProp<RootStackParamList, 'Coleta'>;
export type InitialScreenProp = StackNavigationProp<RootStackParamList, 'Initial'>;