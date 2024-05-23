import React from 'react'

export default function FrcstTable() {
  return (
    <div className="w-full h-20 flex justify-center items-center bg-red-500 text-red-100">
    <table>
      <thead>
        <tr className="bg-red-500 text-red-100 font-bold">
          <th scope="col" className="px-6 py-4">항목명</th>
          <th scope="col" className="px-6 py-4">예측일자</th>
          <th scope="col" className="px-6 py-4">예측시간</th>
          <th scope="col" className="px-6 py-4">항목값</th>
        </tr>
      </thead>
      <tbody>
        {tdata && selItem && (
          <tr>
            <td className="px-6 py-4">{selItem["항목명"]}</td>
            <td className="px-6 py-4">{tdata.baseDate}</td>
            <td className="px-6 py-4">{tdata.basetime}</td>
            <td className="px-6 py-4">{selItem["항목값"]}</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  )
}
