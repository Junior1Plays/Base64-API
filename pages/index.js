import Link from 'next/link';

async function Home() {
    return (<div>
        <h1>Home</h1>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
    </div>)
}

export default Home
