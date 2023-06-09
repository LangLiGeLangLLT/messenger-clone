import getUsers from '@/actions/getUsers'
import Sidebar from '@/components/Sidebar'
import UserList from '@/components/UserList'

interface LayoutProps {
  children: React.ReactNode
}

async function Layout({ children }: LayoutProps) {
  const users = await getUsers()

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  )
}

export default Layout
