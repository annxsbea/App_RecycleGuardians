import { ImageSourcePropType } from "react-native";

export interface ColetaResponse { 
    id_coleta: number;
    cep_coleta: string;
    endereco_coleta: string;
    hr_abertura_coleta: string;
    hr_fechamento_coleta: string;
    image: ImageSourcePropType;

}