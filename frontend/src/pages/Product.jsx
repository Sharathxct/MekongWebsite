import React from 'react'
import Navbar from '../components/Navbar'
import Prodbread from '../components/Prodbread'

export default function Product() {
  const nItem = [
    { link: "Home", path: "/" },
  ]
  return (
    <>
        <Navbar  nItem={nItem} />
        <Prodbread />
    </>
  )
}
