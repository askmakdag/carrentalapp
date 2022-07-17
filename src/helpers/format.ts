import getSymbolFromCurrency from "currency-symbol-map";

export default function getBrowserLocales(options = {}) {
    const defaultOptions = {
        languageCodeOnly: false,
    };

    const opt = {
        ...defaultOptions,
        ...options,
    };

    const browserLocales =
        navigator.languages === undefined
            ? [navigator.language]
            : navigator.languages;

    if (!browserLocales) {
        return undefined;
    }

    return browserLocales.map(locale => {
        const trimmedLocale = locale.trim();

        return opt.languageCodeOnly
            ? trimmedLocale.split(/-|_/)[0]
            : trimmedLocale;
    });
}

export function formatMoney(amount:  number, currency: string) {
    const locale = getBrowserLocales()?.[0];
    return `${getSymbolFromCurrency(currency)} ${amount.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function dateFormat(date) {
    const moment = require('moment');
    const d = new Date(date);
    return moment(d).format('D MMMM YYYY, h:mm a')
}
