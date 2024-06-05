import { ILoginPayload, SignInResponse, SignUpFormInterface, SignUpResponse } from "../@types/apis/auth";
import { ApiService } from "./apiServices";

class AuthService extends ApiService {

    public async login(payload: ILoginPayload): Promise<SignInResponse> {
        const email=payload.email_user.replace(/\D/g, '');
        return this.get<SignInResponse>(`user/login?email=${email}&senha=${payload.senha_user}`);
    }

    public async register(payload:SignUpFormInterface ): Promise<SignUpResponse> {
        payload.email_user=payload.email_user.replace(/\D/g, '');
        return this.post<SignUpResponse, SignUpFormInterface>(`user`, payload);

    }
}

export const authService = new AuthService();