
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
        <div className="mt-4 shadow-2xl w-fit">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="shadow-lg">
                     
                            <h5 className="text-lg font-bold mb-4">Bordered Table</h5>
                                <table className='table'>
                                <thead>
                                <tr>
                                    {tableCol.map((c)=>(

                                          <th key={c.id} scope="col">{c.col}</th>

                                    ))}
                                 
                                </tr>
                            </thead>
                                    <tbody>
                                        {data.map((person) => (
                                            <tr className="border-1" key={person.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">{person.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{person.firstName}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{person.lastName}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{person.handle}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                        
                    </div>
            </div>
        </div>
    );
}