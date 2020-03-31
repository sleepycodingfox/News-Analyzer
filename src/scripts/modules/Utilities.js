export function prepareDate(date) { //подготавливаю формат даты
    const year = date.getFullYear();

    const monthes = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];
    const month = date.getMonth(); // 0 - 11

    const day = date.getDate();

    return `${day} ${monthes[month]}, ${year}`;
}

export function prepareDateForGraph(date) { //подготавливаю формат даты
    const weekDay = [
        'пн',
        'вт',
        'ср',
        'чт',
        'пт',
        'сб',
        'вс'
    ];
    const day = date.getDate();

    return `${day}, ${weekDay[date.getDay()]}`;
}

export function getMonthFromDate(date) { //подготавливаю формат даты
    const monthes = [
        'январь',
        'февраль',
        'март',
        'апрел',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь'
    ];
    const month = date.getMonth(); // 0 - 11
    return `${monthes[month]}`;
}
