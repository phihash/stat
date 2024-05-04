'use client'
import React, { useState } from 'react'
interface Prefecture {
  prefCode: number
  prefName: string
}

const Prefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>()
  async function getData() {
    const res = await fetch('/api/resas')
    const data = await res.json()
    console.log(data.data.result)

    setPrefectures(data.data.result)
  }

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
          <p>Loading</p>
          <button className="bg-gray-200 p-2 mb-5" onClick={getData}>
            データを取得
          </button>
          <p>ボタンを押してください</p>
        </>
      )}
    </div>
  )
}

export default Prefectures
