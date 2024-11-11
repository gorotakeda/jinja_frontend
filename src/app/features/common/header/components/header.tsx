import { useAuth } from '@/app/repository/authLogin/hooks';

export const Header  = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button>
            <span className="sr-only">メニュー</span>
          </button>
          <h1 className="text-2xl font-bold">神社管理システム</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {isAuthenticated && (
              <>
                <li><a href="/admin/worshiperList" className="hover:underline">参拝者一覧</a></li>
                <li><a href="/new-registration" className="hover:underline">参拝者新規登録</a></li>
                <li><a href="/prayer-kagura-reservation" className="hover:underline">ご祈祷予約一覧</a></li>
                <li><a href="/" onClick={logout} className="hover:underline">ログアウト</a></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
