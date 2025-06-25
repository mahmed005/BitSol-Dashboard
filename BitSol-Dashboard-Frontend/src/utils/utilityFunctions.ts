import type { SetURLSearchParams } from "react-router";

export function goBackRegisterPage(searchParams: URLSearchParams, setSearchParams: SetURLSearchParams) {
    const currStep = searchParams.get('step');
    if (currStep)
        setSearchParams(prev => {
            prev.set('step', `${Number(currStep) - 1}`)
            return prev;
        })
};  