import getConversations from '@/actions/getConversations'
import ConversationList from '@/components/ConversationList'
import Sidebar from '@/components/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

async function Layout({ children }: LayoutProps) {
  const conversations = await getConversations()

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  )
}

export default Layout
