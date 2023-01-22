import styles from '../../styles/index.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https:/jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { list: data }
    }
}
const List = (list: any) => {
    console.log('list', list.list);
    return (
        <>
        <div>List Component</div>
        {list.list.map((item: any) => (
            <Link href={'/list/' + item.id} key={item.id}>
                <p className={styles.single}>
                    {item.name}
                </p>
               
            </Link>
        ))}
        </>
        
    )
}

export default List;