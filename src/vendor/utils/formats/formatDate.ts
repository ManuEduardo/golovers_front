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

export const formatDateNumeric = (date: string) => {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    };

    const formattedDate = new Date(date).toLocaleDateString('en-GB', options);
    return formattedDate.replace(/\//g, '-');
}