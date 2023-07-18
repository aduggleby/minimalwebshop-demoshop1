'use client'
import { useSearchParams   } from 'next/navigation'
import { useEffect } from 'react'

export function Shop() {
  const params = useSearchParams  ()
    const shopid = params.get("shop");

  useEffect(()=>{
    console.log("Loaded")
    window && window.MWS && window.MWS.init();
  })

  return (
    <>
      <div mws={shopid} />
    </>
)
}
