export const getStaticPaths = async () => {
    const res = await fetch('https:/jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log('datares', data);
    const paths = data.map((users: any) => {
        return {
            params: { id: users.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    console.log('iddata', id);
    const res = await fetch('https:/jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    console.log('iddata1', data);

    return {
        props: { list: data }
    }
}
const Detail = (list: any) => {
    const { list: listValue } = list;
    console.log('lisddd', listValue);
    return (
        <>
        <h1>{listValue.name}</h1>
        <p>{listValue.email}</p>
        <p>{listValue.website}</p>
        <p>{listValue.address.city}</p>
        </>
        
    )
}
export default Detail;