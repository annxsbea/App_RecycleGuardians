import { ApiService } from "./apiServices";
// import pontoC1 from "../assets/pontoC1.png"; - MOCK
// import pontoC2 from "../assets/pontoC2.png"; - MOCK
import { ColetaResponse } from "../@types";

class ColetaService extends ApiService {
  // public async getColeta(): Promise<ColetaResponse[]> {
  //   return [{
  //     id_coleta: 1,
  //     endereco_coleta: "PR-323, s/n - Zona Rural, Umuarama - PR",
  //     image: pontoC1,
  //     cep_coleta: "05653-070",
  //     hr_abertura_coleta: "08:00",
  //     hr_fechamento_coleta: "18:00",
  //   },
  //   {
  //     id_coleta: 2,
  //     endereco_coleta: "Praça Roberto Gomes Pedrosa, 1 - Morumbi- SP",
  //     image: pontoC2,
  //     cep_coleta: "05653-070",
  //     hr_abertura_coleta: "09:00",
  //     hr_fechamento_coleta: "17:00",
  //   },]
  // };

  public async getColeta(): Promise<ColetaResponse[]> {
    const response = await this.get<ColetaResponse[]>(`/coleta`);
    return response;
  }
}
export const coletaService = new ColetaService();