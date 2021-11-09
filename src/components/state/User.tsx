import { useState } from "react";

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'Alex',
      email: 'alex@test.com'
    })
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>Username is {user.name}</div>
      <div>Email is {user.email}</div>
    </div>
  )
}
