import { useMemo } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

export default function useLoading(withError = false) {
    const [loading, setLoading] = useState(false)

    const callback = useCallback(
        async (func, args = {}) => {
            try {
                setLoading(true)
                const res = await func(args);
                setLoading(false)
                return res
            } catch (e) {
                setLoading(false)

                if (withError) //handle error
                    return {
                        error: e,
                        completed: false,
                    }
            }
        },
        [setLoading, withError],
    )

    return useMemo(() => [loading, callback], [loading, callback])
}
