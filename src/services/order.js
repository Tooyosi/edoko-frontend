import axios from "./index";

export const trackOrder =(orderId)=> axios.post(`/orders/track?tracking_id=${orderId}`)