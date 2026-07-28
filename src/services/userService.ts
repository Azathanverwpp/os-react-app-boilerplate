import { UserSearchResponse } from '../types/user'

const API_URL = 'https://apps-facade-api-prd-one.os.wpp.com/api/users/'

export async function searchUsers(search: string, token: string): Promise<UserSearchResponse> {
  const response = await fetch(`${API_URL}?filter[search]=${encodeURIComponent(search)}&page=1&itemsPerPage=10`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return response.json()
}
