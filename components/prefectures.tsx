'use client'
import React, { useState, useEffect } from 'react'
interface Prefecture {
  prefCode: number
  prefName: string
}

const Prefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([])
  async function getData() {
    const res = await fetch('/api/resas')
    const data = await res.json()
    setPrefectures(data.data.result)
  }

  const handleCheckboxChange = (prefCode: number) => {
    setSelectedPrefectures((prevSelected) => {
      if (prevSelected.includes(prefCode)) {
        return prevSelected.filter((code) => code !== prefCode)
      } else {
        return [...prevSelected, prefCode]
      }
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {prefectures.length > 0 ? (
        <ul>
          {selectedPrefectures}
          {prefectures.map((prefecture) => (
            <div key={prefecture.prefCode} className="flex">
              <input
                type="checkbox"
                name={prefecture.prefName}
                id={prefecture.prefName}
                onChange={() => handleCheckboxChange(prefecture.prefCode)}
              />
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
