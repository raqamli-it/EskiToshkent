import axios from "axios";
import { BASE_URL } from "./url.json";

// Authorization headerini olish uchun funksiya
const authHeader = () => {
  const token = localStorage.getItem("JADIDLAR_TOKEN");
  const lang = localStorage.getItem("JADID_LAN") || "uz";
  return token
    ? {
        Authorization: "Bearer " + token,
        "Accept-Language": lang,
      }
    : { "Accept-Language": lang };
};

// Axios clientini yaratish
const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

class DataService {
  // GET so'rovini yuborish
  static get(path, params = {}, optionalHeader = {}) {
    return client({
      method: "GET",
      url: path,
      params: { ...params },
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  // POST so'rovini yuborish
  static post(path = "", data = {}, optionalHeader = {}) {
    return client({
      method: "POST",
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  // PATCH so'rovini yuborish
  static patch(path = "", data = {}) {
    return client({
      method: "PATCH",
      url: path,
      data: data,
      headers: { ...authHeader() },
    });
  }

  // DELETE so'rovini yuborish
  static delete(path = "", data = {}) {
    return client({
      method: "DELETE",
      url: path,
      data: data,
      headers: { ...authHeader() },
    });
  }

  // PUT so'rovini yuborish
  static put(path = "", data = {}, optionalHeader = {}) {
    return client({
      method: "PUT",
      url: path,
      data: data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }
}

/**
 * Axios interceptors - bu so'rovlar va javoblarni olishdan oldin va keyin bajariladi,
 * bu orqali siz so'rovlarni va javoblarni o'zgartirishingiz mumkin.
 */
client.interceptors.response.use(
  function (response) {
    // Agar javob muvaffaqiyatli bo'lsa, uni to'g'ridan-to'g'ri qaytaramiz
    return response.data;
  },
  function (error) {
    // Xato holatlar uchun to'g'ri xabar chiqarish
    let message = error.response?.data || error.message;
    switch (error.response?.status) {
      case 500:
        message = { errorCode: 500, message: "Внутренняя ошибка сервера!" };
        break;
      case 401:
        localStorage.removeItem("JADIDLAR_TOKEN");
        message = { errorCode: 401, message: "Authorization required." };
        break;
      case 400:
        message = error.response?.data || {
          errorCode: 400,
          message: "Bad request.",
        };
        break;
      default:
        message = error.response?.data || {
          message: "An unexpected error occurred.",
        };
    }
    return Promise.reject(message);
  }
);

export { DataService };
