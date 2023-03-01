import {useEffect, useReducer, Reducer} from 'react'

export type UseRequestProps = {
    requestInfo: RequestInfo
    requestInit: RequestInit
}

enum UseRequestActions {
    SET_DATA = 'SET_DATA',
    SET_NONE = 'SET_NONE',
    SET_ERROR = 'SET_ERROR',
}

type UseRequestAction<T> = {
    type: UseRequestActions
    payload?: string | T,
}

type UseRequestState<T> = {
    isError: boolean
    isLoading: boolean
    data?: T
    error?: string
}

function reducer<T> (state: UseRequestState<T>, action: UseRequestAction<T>): UseRequestState<T> {
    switch (action.type) {
        case UseRequestActions.SET_DATA:
            return {
                ...state,
                isLoading: false,
                data: action?.payload as T,
            }
        case UseRequestActions.SET_NONE:
            return {
                ...state,
                isLoading: false,
            }
        case UseRequestActions.SET_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
                error: action?.payload as string,
            }
        default:
            throw new Error(`Action ${action.type} not found`)
    }
}

export default function useRequest<T> ({requestInfo, requestInit}: UseRequestProps) {
    const [state, dispatch] = useReducer<Reducer<UseRequestState<T>, UseRequestAction<T>>>(
        reducer<T>,
        {
            isError: false,
            isLoading: true,
        }
    )

    const fetchData = async () => {
        let payload: T

        try {
            const response: Response = await fetch(requestInfo, requestInit)

            if (response.status !== 200) {
                dispatch({
                    type: UseRequestActions.SET_ERROR,
                    payload: `Error ${response.status} : ${response.statusText}`
                })
            } else {
                payload = await response.json()
                dispatch({
                    type: UseRequestActions.SET_DATA,
                    payload
                })
            }
        } catch (err: any) {
            dispatch({
                type: UseRequestActions.SET_ERROR,
                payload: err?.message,
            })
        } finally {
            dispatch({type: UseRequestActions.SET_NONE})
        }
    }

    useEffect(() => {
        if (state.data === undefined) {
            fetchData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {...state}
}