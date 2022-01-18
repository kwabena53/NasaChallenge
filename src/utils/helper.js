

export const normalizeData = (data)=>{
    let formattedData = {}

    Object.values(data).map((apod)=>{
        const {copyright,
            date,
            explanation,
            hdurl,
            media_type,
            service_version,
            title,
            url} = apod
        return(
            formattedData[apod.date] = {
                copyright,
                date,
                explanation,
                hdurl,
                media_type,
                service_version,
                title,
                url,
                liked: false
            }
        )
       
    })

    return formattedData
}