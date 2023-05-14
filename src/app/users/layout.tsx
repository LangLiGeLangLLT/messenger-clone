import Sidebar from '@/components/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  )
}

export default Layout
