const BASE_URL = import.meta.env.BASE_URL || "/";
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api").replace(/\/$/, "");
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || `${API_BASE_URL}/contact`;
const CV_DOWNLOAD_URL = import.meta.env.VITE_CV_URL || `${BASE_URL}cv.pdf`;

export { API_BASE_URL, CONTACT_API_URL, CV_DOWNLOAD_URL };
