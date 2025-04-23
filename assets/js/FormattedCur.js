export function FormatCurrency(value , locale , currency){
    return new Intl.NumberFormat(locale , {
        currency : currency,
        style : 'currency'
    }).format(value)
}
