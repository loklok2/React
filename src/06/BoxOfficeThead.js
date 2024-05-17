export default function BoxOfficeThead() {
    return (
        <thead className="border-b border-neutral-200 font-medium">
            <tr className="bg-red-500 text-red-100 font-bold ">
                <th scope="col" className="px-6 py-4">순위</th>
                <th scope="col" className="px-6 py-4">영화명</th>
                <th scope="col" className="px-6 py-4">매출액</th>
                <th scope="col" className="px-6 py-4">관객수</th>
                <th scope="col" className="px-6 py-4">증감율</th>
            </tr>
        </thead>
    )
}
