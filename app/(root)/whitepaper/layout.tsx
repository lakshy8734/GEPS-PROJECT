'use client'
import Sidebar from "@/components/Sidebar"

const layout = ({children}: { children: React.ReactNode }) => {
  return(
    <>
      <Sidebar/>
      <main className="max-h-fit -mb-28">
        {children}
      </main>
    </>
  )
}

export default layout