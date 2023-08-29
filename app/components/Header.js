import React from 'react';
import Link from "next/link";

function Header(props) {
    return (
        <div className="bg-gray-700 p-4 text-white rounded mb-4 flex justify-between">
            <div className="logo">
                <Link href="/">Cookie Web</Link>
            </div>
            <nav className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/set-cookies">Set Cookie</Link>
                <Link href="/get-cookies">Read Cookie</Link>
                <Link href="/api/redirect">Redirect</Link>
            </nav>
        </div>
    );
}

export default Header;