import { Injectable } from '@angular/core';
import {computeRRule} from './util/computeRRule/toString/computeRRule';
@Injectable({
  providedIn: 'root'
})
export class OttomateNgxRruleService {
  constructor() {}
  computeRRule(params) {
    return computeRRule(params);
  }
}
