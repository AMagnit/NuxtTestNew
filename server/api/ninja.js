export default defineEventHandler( async (event) =>{

    // handle query

    const {name} = getQuery(event)

    const {age} = await readBody(event)

    const {currencyKey} = useRuntimeConfig()

    // api currency
    const {data} = await $fetch(`https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}`)



    return {
        data
    }
})