export const initialState = () => ({
    thermometerData: [],
    loading: false,
    error: ""
})

const thermometerReducer = (state = initialState(), action) => {
    const { type } = action;
    switch (type) {
        case "GET_THERMOMETER_DATA":
            return {
                ...state,
                loading: true
            };
        case "GET_THERMOMETER_DATA_SUCCESS":
            return {
                ...state,
                thermometerData: action.thermoData,
                loading: false
            }
        case "GET_THERMOMETER_DATA_ERROR":
            return {
                ...state,
                error: action.thermoError,
                loading: false
            }
        default:
            return state;
    }
}

export default thermometerReducer;