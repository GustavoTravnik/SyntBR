import { Injectable } from '@angular/core';
import { api } from '../services/axios.config';

@Injectable({
  providedIn: 'root',
})
export class CreditService {
    private creditRequestBaseApiPath = "/api/credits/request";

    public requestCredit = async(amount: number) => {
       return await api.post(this.creditRequestBaseApiPath, {amount})
        .then(response => true)
        .catch(error => false);
    }
}
