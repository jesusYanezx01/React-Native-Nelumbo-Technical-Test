export const BASE_URL = "https://checkapidev.nelumbo.com.co";

export const ENDPOINTS = {
  LOGIN_POST: `${BASE_URL}/api/v1/auth/signin`,
  FETCH_REPORT_FOLIO_GET: `${BASE_URL}/api/v1/report-folio/mobile/filters`,
  FETCH_FOLIO_ID_GET: (folioId: string | string[]) =>
    `${BASE_URL}/api/v1/report-folio/${folioId}`,
};
