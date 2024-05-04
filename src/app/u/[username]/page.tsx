'use client'

import { Message } from "@/model/User"
import { useState } from "react"

const page = () => {

    const [messages, setMessages] = useState<Message[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSwitchLoading, setIsSwitchLoading] = useState(false)

    



  return (
    <div>MessagePage</div>
  )
}

export default page