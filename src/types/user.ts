export interface User {
  id: string
  firstname: string
  lastname: string
  email: string
  agency: string
  country: string
  title: string
  department: string
}

export interface UserSearchResponse {
  data: User[]
  pagination: {
    itemsPerPage: number
    page: number
    total: number
  }
}
