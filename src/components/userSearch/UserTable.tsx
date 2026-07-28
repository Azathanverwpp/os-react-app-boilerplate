import styles from './UserTable.module.scss'
import { User } from '../../types/user'

interface UserTableProps {
  users: User[]
}

const UserTable = ({ users }: UserTableProps) => {
  const getValue = (value: string | null | undefined) => {
    if (!value || value === 'undefined') {
      return <span className={styles.emptyValue}>—</span>
    }

    return value
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Country</th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>
              {user.firstname} {user.lastname}
            </td>

            <td>{user.email}</td>

            <td>{getValue(user.department)}</td>

            <td>{getValue(user.country)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
