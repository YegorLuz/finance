import * as moment from 'moment';
import { IIMoney, IIMoneyRecord } from '../models/data/immutable';

moment.updateLocale('ru', {
    week : {
        dow : 1,
        doy : 0
     }
});

export function calcTotalOutlay (money: IIMoney) {
    return money.reduce((acc: number, item: IIMoneyRecord) => acc + parseFloat(item.get('amount')), 0.0);
}

export function formatPrice (price: number) {
    return `${price.toFixed(2)} грн`;
}