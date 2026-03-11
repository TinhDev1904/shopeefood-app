'use server'

import { stackServerApp } from "@/stack/server"
import { useUser } from "@stackframe/stack"
import { redirect } from "next/navigation"

const getCurrentUser = async () => {
   const user = useUser()
    return user
}

export { getCurrentUser }