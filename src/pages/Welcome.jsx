import { useSelector } from 'react-redux'
export default function Welcome() {

  const { isLoggedIn, username } = useSelector((state) => state.auth)

  if (isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
      </div>
    );
  }
}
