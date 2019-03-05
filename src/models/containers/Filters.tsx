export interface IProps {
    hideEmptyDays: boolean,
    selectedMonth: number,
    selectedWeekDay: number | null,
    toggleEmptyDays?: () => void,
    onChangeMonth?: (event: React.FormEvent<HTMLSelectElement>) => void,
    onChangeWeekDay?: (event: React.FormEvent<HTMLSelectElement>) => void,
}