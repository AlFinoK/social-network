/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue'

export const Counter = () => {
    const counterValue = useSelector(getCounterValue)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        if (counterValue > 0) {
            dispatch(counterActions.decrement())
        }
    }

    return (
        <>
            <h1 data-testid="value-title" className="value">
                {counterValue}
            </h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
                theme={ButtonTheme.OUTLINE}>
                increment
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
                theme={ButtonTheme.OUTLINE}>
                decrement
            </Button>
        </>
    )
}
