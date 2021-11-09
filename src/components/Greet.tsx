type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {
        props.isLoggedIn ? `Welcome {props.name}. You have {messageCount} unread messages!!` : 'Welcome Guest'
      }
    </div>
  )
}