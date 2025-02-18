import Link from "next/link";

export default function TheHeader() {
    return (
        <header className="flex justify-between container mx-auto">
            <div>
                LOGO
            </div>
            <nav className="flex gap-x-5">
                <Link href="/">Main</Link>
                <Link href="/about">About</Link>
                <Link href="/products">Products</Link>
                <a href="#">Link</a>
            </nav>
        </header>
    )
}
