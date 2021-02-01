export type GetUsersType = {
  items: Array<UsersType>
  totalCount: number | null
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