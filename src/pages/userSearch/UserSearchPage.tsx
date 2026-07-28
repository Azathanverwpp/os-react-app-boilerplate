import { WppCard, WppTypography } from '@wppopen/components-library-react'
import { useOs } from '@wppopen/react'
import { useState } from 'react'

import EmptyState from 'components/userSearch/EmptyState'
import ErrorMessage from 'components/userSearch/ErrorMessage'
import Loading from 'components/userSearch/Loading'
import SearchBar from 'components/userSearch/SearchBar'
import UserTable from 'components/userSearch/UserTable'
import { searchUsers } from 'services/userService'
import { User } from 'types/user'

import styles from './UserSearchPage.module.scss'

export const UserSearchPage = () => {
  const { osApi } = useOs()

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  const [error, setError] = useState('')

  async function handleSearch() {
    try {
      setLoading(true)
      setError('')

      const token = osApi.getAccessToken()

      const response = await searchUsers(search, token)

      setUsers(response.data)

      setHasSearched(true)
    } catch (err) {
      console.error(err)

      setError('Unable to fetch users')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <WppTypography type="2xl-heading">User Search</WppTypography>

      <SearchBar value={search} onChange={setSearch} onSearch={handleSearch} />

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && users.length > 0 && (
        <WppCard style={{ marginTop: '24px', padding: '20px' }}>
          <WppTypography type="xl-heading">
            Found {users.length} user{users.length !== 1 ? 's' : ''}
          </WppTypography>

          <br />

          <UserTable users={users} />
        </WppCard>
      )}

      {!loading && !error && hasSearched && users.length === 0 && <EmptyState />}
    </div>
  )
}
