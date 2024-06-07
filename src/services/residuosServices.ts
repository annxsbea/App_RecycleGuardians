import { ResiduosPayload, ResiduosResponse } from "../@types";
import { TLoginPayload, SignInResponse, TSignUpForm, SignUpResponse } from "../@types/apis/auth";
import { ApiService } from "./apiServices";

class ResiduosService extends ApiService {

    
    public async register(payload:ResiduosPayload ){
        return this.post<ResiduosResponse, ResiduosPayload>(`residuos`, payload);
    }
}

export const residuosService = new ResiduosService();

