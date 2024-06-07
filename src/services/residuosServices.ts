import { ApiService } from "./apiServices";

import { ResiduosPayload, ResiduosResponse } from "../@types";

class ResiduosService extends ApiService {
    public async register(payload: ResiduosPayload) {
        return this.post<ResiduosResponse, ResiduosPayload>(`residuos`, payload);
    }
}

export const residuosService = new ResiduosService();
