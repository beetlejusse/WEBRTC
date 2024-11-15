import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
        <span className="loading loading-spinner loading-lg"></span>
    </div>
  )
}

export default Loader