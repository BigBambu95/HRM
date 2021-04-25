// Функция добавления постфикса REQUEST для экшенов с запросами
export const REQUEST = (type: string) => `${type}_REQUEST`

// Функция добавления постфикса SUCCESS для успешных экшенов
export const SUCCESS = (type: string) => `${type}_SUCCESS`

// Функция добавления постфикса FAILURE для провальных экшенов
export const FAILURE = (type: string) => `${type}_FAILURE`
