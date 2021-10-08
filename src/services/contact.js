import axios from "./index";

export const sendContact =(data)=> axios.post(`/contact-save`, data)

export const sendNewsletter =(data)=> axios.post(`/newsletter/subscribe`, data)
