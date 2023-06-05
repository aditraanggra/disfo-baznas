type ChildProps = {
  children: JSX.Element[]
}

const Layout = ({ children }: ChildProps) => {
  return (
    <div className='bg-layout flex flex-col justify-between h-full w-screen'>
      {children}
    </div>
  )
}

export default Layout
