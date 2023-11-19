import { useQuery } from "@tanstack/react-query"
import { getRequestAnimeReview } from "../api/fetching"
import { getAnimeReview } from "../utils/getDataSafe"

// ! last patch
const UseReview = (mal_id: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["reviews", mal_id],
        queryFn: () => getRequestAnimeReview(mal_id)
    })

    const reviews = data ? getAnimeReview(data.data) : []

    return { isLoading, isError, error, reviews }
}

export default UseReview