export type statePropsType = {
    countNumber: number
    countString: string
    maxValue: number
    startValue: number
    editMode: boolean
}

type onChangeMaxValueType = {
    type: 'ON_CHANGE_MAX_VALUE'
    value: number
}

type onChangeStartValueType = {
    type: 'ON_CHANGE_START_VALUE'
    value: number
}

type incType = {
    type: 'INC'
}

type resetType = {
    type: 'RESET'
}

type setType = {
    type: 'SET'
}

type setDisplayType = {
    type: 'SET_DISPLAY'
}


export type actionPropsType =
    onChangeStartValueType
    | onChangeMaxValueType
    | incType
    | resetType
    | setType
    | setDisplayType


export const initialState: statePropsType = {
    countNumber: 0,
    countString: '',
    maxValue: 0,
    startValue: 0,
    editMode: true
}

export const counterReducer = (state: statePropsType = initialState, action: actionPropsType) => {
    switch (action.type) {
        case "ON_CHANGE_START_VALUE": {
            state.startValue = action.value
            return {...state}
        }
        case "ON_CHANGE_MAX_VALUE": {
            state.maxValue = action.value
            return {...state}
        }
        case "INC": {
            if (state.countNumber < state.maxValue) {
                state.countNumber = state.countNumber + 1
            }
            return {...state}
        }
        case "RESET": {
            state.countNumber = state.startValue
            state.editMode = true
            return {...state}
        }
        case "SET": {
            state.editMode = false
            state.countNumber = state.startValue
            return {...state}
        }
        case "SET_DISPLAY": {
            if (state.startValue < 0) {
                state.countString = 'incorrect value!'
            } else if (state.maxValue > 99 || state.maxValue < 0) {
                state.countString = 'incorrect value!'
            } else if (state.startValue === state.maxValue) {
                state.countString = 'incorrect value!'
            } else if (state.startValue > state.maxValue) {
                state.countString = 'incorrect value!'
            } else {
                state.countString = 'enter values and press "set"'
            }
            return {...state}
        }
        default:
            return state
    }
}


export const onChangeMaxValueAC = (value: number): onChangeMaxValueType => {
    return {type: 'ON_CHANGE_MAX_VALUE', value}
}

export const onChangeStartValueAC = (value: number): onChangeStartValueType => {
    return {type: 'ON_CHANGE_START_VALUE', value}
}

export const incAC = (): incType => {
    return {type: 'INC'}
}

export const resetAC = (): resetType => {
    return {type: 'RESET'}
}

export const setAC = (): setType => {
    return {type: 'SET'}
}

export const setDisplayAC = (): setDisplayType => {
    return {type: 'SET_DISPLAY'}
}






