
interface Person {
    id: number;
    firstName: string;
    lastName: string;
    handle: string;
}

const data: Person[] = [
    {
        id: 1,
        firstName: 'Mark',
        lastName: 'Otto',
        handle: '@mdo',
    },
    {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thornton',
        handle: '@fat',
    },
    {
        id: 3,
        firstName: 'Larry',
        lastName: 'the Bird',
        handle: '@twitter',
    },
];

export default function Table() {
    const tableCol=[
        {
            id:1,
            col:'#'
        },
        {
            id:2,
            col:'first name'
        },
        {
            id:3,
            col:'last name'
        },
        {
            id:4,
            col:'handle'
        }
    ]

    return (
        <div>
            <div>
                <div>
                    <h5>Bordered Table</h5>
                    <table>
                        <thead>
                            <tr>
                                {tableCol.map((c)=>(
                                    <th key={c.id} scope="col">{c.col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((person) => (
                                <tr key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>{person.handle}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}