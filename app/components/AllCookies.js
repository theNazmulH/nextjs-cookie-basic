export default function AllCookies({ cookieData }) {
    return (
        <>
            {
                cookieData.map((cookie, index) => (
                    <tr key={index} className="border border-collapse">
                        <td className="p-2 border">{cookie.name}</td>
                        <td className="p-2 border">{cookie.value}</td>
                        <td className="p-2 border">{cookie.path}</td>
                    </tr>
                ))
            }
        </>
    );
}