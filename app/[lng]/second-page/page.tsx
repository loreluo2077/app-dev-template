import Link from 'next/link'

export default function Page({ params: { lng } }:any) {
    return (
        <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>
       go firt page
      </Link>
    </>
    )

    }