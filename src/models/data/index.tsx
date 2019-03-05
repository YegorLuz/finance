export interface IMoneyRecord {
    id: string,
    amount: string,
    forWhat: string,
}

export interface IDay {
    id: string,
    date: number,
    weekDay: string,
    money: Array<IMoneyRecord>,
};

export interface IMonth {
    id: string,
    name: string,
    days: Array<IDay>,
};