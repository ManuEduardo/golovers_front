const locale = 'es-ES'
export const formatLongDate = (date: Date) => {
    return new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }).format(date)
}

export const formatShortDate = (date: string) => {
    return new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(new Date(date))
}