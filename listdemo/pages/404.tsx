import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
const router = useRouter();
    useEffect( () => {
            setTimeout(() => {
                router.push('/');
            }, 3000)
    }, [router]);

    return (
        <div className="not-found">
<h1>Ooooops....</h1>
<h2>The page cannot be found</h2>
<div>Go back to the <Link href="/"><p>HomePage</p></Link></div>
        </div>
    )
}
export default NotFound;