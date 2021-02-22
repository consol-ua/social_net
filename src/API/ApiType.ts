export type GetUsersType = {
  items: Array<UsersType>
  totalCount: number
  error: string | null
}
export type UserPhotosType = {
  small: string | null
  large: string | null
}
export type UsersType = {
  name: string
  id: number,
  photos: UserPhotosType
  status: string | null
  followed: boolean
}

export type PostDelFollowUserType = {
  resultCode: number
  messages: Array<string>,
  data: any
}
export type PostDelLoginType = {
  resultCode: number
  messages: Array<string>,
  data: any
}

type PhotosType = {
  small: string | null
  large: string | null
}
export type GetProfileUser = {
  aboutMe: string | null
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  contacts?: any
  photos: PhotosType
}

export enum AuthResultCodeEnum {
  Success = 0,
  Error = 1
}
export type AuthDataType = {
  id: number
  email: string
  login: string
}
export type GetAuthType = {
  data: AuthDataType
  resultCode: AuthResultCodeEnum
  messages: Array<string>
}