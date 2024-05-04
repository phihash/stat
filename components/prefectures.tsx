'use client'
import React, { useState, useEffect } from 'react'
interface Prefecture {
  prefCode: number
  prefName: string
}

const Prefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>()
  async function getData() {
    const res = await fetch('/api/resas')
    const data = await res.json()
    setPrefectures(data.data.result)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {prefectures ? (
        <ul>
          {prefectures.map((prefecture) => (
            <div key={prefecture.prefCode} className="flex">
              <input type="checkbox" name="" id={prefecture.prefName} />
              <label htmlFor={prefecture.prefName}>{prefecture.prefName}</label>
            </div>
          ))}
        </ul>
      ) : (
        <>
          <p>Loading.....</p>
        </>
      )}
    </div>
  )
}

export default Prefectures
