import axios from "axios";
import {UserType} from "../redux/usersReducer";

export type APIResponseType<T = {}> = {
  data: T
  resultCode: number
  messages: Array<string>
}

const axiosInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "07a6853a-00ae-46be-89bd-7635822fedbc",
  },
});

type UsersAPIResponseType = {
  items: UserType[]
  totalCount: number
  error: string
};

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return axiosInstance
      .get<UsersAPIResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
};


export type PhotosType = {
  small: string | null
  large: string | null
};

export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type ProfileType = {
  userId: number
  fullName: string
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: PhotosType
  contacts: ContactsType
};

type ProfileAPIResponseType = ProfileType;

type ProfilePhotoResponseDataType = {
  photos: PhotosType
};

export const profileAPI = {
  getUserProfile(user_ID: number) {
    return axiosInstance
      .get<ProfileAPIResponseType>(`profile/${user_ID}`)
      .then(response => response.data);
  },
  getUserStatus(user_ID: number) {
    return axiosInstance
      .get<string>(`profile/status/${user_ID}`)
      .then(response => response.data);
  },
  updateUserStatus(newStatus: string) {
    return axiosInstance
      .put<APIResponseType>("profile/status", {status: newStatus})
      .then(response => response.data);
  },
  saveUserAvatar(photoFile: File) {
    const requestData = new FormData();
    requestData.append("image", photoFile);

    return axiosInstance
      .put<APIResponseType<ProfilePhotoResponseDataType>>(
        "profile/photo",
        requestData,
        {headers: {"Content-type": "multipart/form-data"}},
      )
      .then(response => response.data);
  },
  saveUserProfile(profile: ProfileType) {
    return axiosInstance
      .put<APIResponseType>("profile", profile)
      .then(response => response.data);
  },
};

type AuthAPIDataType = {
  id: number
  email: string
  login: string
};

export const authAPI = {
  me() {
    return axiosInstance
      .get<APIResponseType<AuthAPIDataType>>("auth/me")
      .then(response => response.data);
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    return axiosInstance
      .post<APIResponseType<{ userId: number }>>(
        "auth/login",
        {email, password, rememberMe, captcha},
      )
      .then(response => {
        return response.data;
      });
  },
  logout() {
    return axiosInstance
      .delete<APIResponseType>("auth/login")
      .then(response => response.data);
  },
};

export const followAPI = {
  follow(user_ID: number) {
    return axiosInstance
      .post<APIResponseType>(`follow/${user_ID}`, {})
      .then(response => response.data);
  },
  unfollow(user_ID: number) {
    return axiosInstance
      .delete<APIResponseType>(`follow/${user_ID}`)
      .then(response => response.data);
  },
};

type GetCaptchaUrlResponseDataType = {
  url: string
};

export const securityAPI = {
  getCaptchaUrl() {
    return axiosInstance
      .get<GetCaptchaUrlResponseDataType>("security/get-captcha-url")
      .then(response => response.data);
  },
};
