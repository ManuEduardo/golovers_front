const locale = 'es-ES'
export const formatLongDate = (date: Date) => {
    return new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }).format(date)
}
