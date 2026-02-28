export const dynamic = 'force-dynamic';

export default async function Home() {
    const url = 'https://cataas.com/api/tags'
    const response = await       fetch(url, { method: 'GET' })

    const json = await response.json()

    return (
        <div>
            {json.map((item: string) => <div key={item}>{item}</div>)}
        </div>
    );
}
