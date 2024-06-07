export interface ResiduosResponse  {
    tipo_residuo: string;
    nive_risco: string;
    id_residuo: number;
    validador: boolean;
    quantidade_residuo: number
}


export interface ResiduosPayload {
    tipo_residuo: string;
    imagem_residuos: string
    validador: string;
    quantidade_residuo: number
}
