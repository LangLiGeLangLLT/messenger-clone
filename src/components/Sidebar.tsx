interface SidebarProps {
  children: React.ReactNode
}

function Sidebar({ children }: SidebarProps) {
  return <div>{children}</div>
}

export default Sidebar
