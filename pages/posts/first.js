import Link from "next/link"

export default function First() {
    return (
        <>
            <h1>First Post</h1>
            <h2>Go <Link href='/'>Back</Link></h2>
        </>
    )
}