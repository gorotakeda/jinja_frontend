import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { atom, useAtom } from 'jotai'

// atomを定義
export const isAuthenticatedAtom = atom<boolean>(false)

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom)
  const router = useRouter()
  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsAuthenticated(false);
    router.push('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    setIsAuthenticated(!!token)

    if (!token) {
      router.push('/')
    }
  }, [router, setIsAuthenticated])

  return { isAuthenticated, logout }
}

export const useAuthRedirect = () => {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom)
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin/worshiperList')
    }
  }, [isAuthenticated, router])

  return { isAuthenticated }
}
