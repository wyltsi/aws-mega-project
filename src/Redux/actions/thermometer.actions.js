export const thermometerActions = {
    getThermometerData: () => ({
        type: "GET_THERMOMETER_DATA"
    }),
    getThermometerDataSuccess: (thermoData) => ({
        type: "GET_THERMOMETER_DATA_SUCCESS",
        thermoData
    }),
    getThermometerDataError: (thermoError) => ({
        type: "GET_THERMOMETER_DATA_ERROR",
        thermoError
    })
}