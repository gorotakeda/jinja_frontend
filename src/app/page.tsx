'use client'

import { AdminLogin } from './features/routes/admin/adminLogin/adminLogin'
import { useAuthRedirect } from './repository/authLogin/hooks'
import { LoadingSpinner } from './features/common/loading/loading'

export default function Home() {
  const { isAuthenticated } = useAuthRedirect()

  if (isAuthenticated) {
    return <LoadingSpinner />
  }

  return <AdminLogin />
}