import { HttpClient } from "./HttpClient";
import SSEEventManager from "./SSEEventManager";

const callPostAPI = (endPoint, authToken, parameter, successCB, errorCB) => {
  let headers = {};
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`
  }
  HttpClient.post(endPoint, parameter, {
    headers
  }).then(response => {
    if (response.data && response.data.SubscriptionID !== undefined && response.data.SubscriptionID !== null) {
      SSEEventManager.registerSubscriptionEvent(response.data.SubscriptionID, successCB, errorCB)
    }
    successCB(response)
  }).catch(error => {
    errorCB(error)
  })
};

export default {
  callPostAPI
}