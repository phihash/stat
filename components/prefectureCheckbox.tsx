import React from 'react'

interface PrefectureCheckboxProps {
  prefName: string
  prefCode: number
  onChange: (prefCode: number) => void
}

const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({
  prefName,
  prefCode,
  onChange,
}) => {
  return (
    <div className="text-2xl cursor-pointer">
      <input
        type="checkbox"
        name={prefName}
        id={prefName}
        onChange={() => onChange(prefCode)}
        className=""
      />
      <label htmlFor={prefName}>{prefName}</label>
    </div>
  )
}

export default PrefectureCheckbox
