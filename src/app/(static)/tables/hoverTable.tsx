interface HoverTableProps {
    title?: string;
    hoverStyle?: boolean;
    borderBottom?: boolean;
    border?: boolean;
    striped?: boolean;
    rows?:any;
    cols?:any;
    smallTable?: boolean;
  }
  interface TableRow {
    id: string;
    firstName: string;
    lastName: string;
    handle: string;
  }
  interface TableCol {
    id: string;
    col: string;
  }
export default function HoverTable({
    title,
    rows,
    cols,
    hoverStyle=false ,
    borderBottom =false,
    border = false,
    striped = false,
    smallTable=false
  }: HoverTableProps) {

    const hoverStyling:string= hoverStyle ? "hover:bg-gray hover:text-black" : "";
    const BorderBottom:string= borderBottom ?  "border-t-2":'';
    const Border: string = border ? 'border' : "";
    const Striped: string = striped ? 'table-striped' : "";
    const SmallTable:string = smallTable? " text-xs" :'';

    const tableData = rows || [
        { id: 1, firstName: "Mark", lastName: "Otto", handle: "@mdo" },
        { id: 2, firstName: "Jacob", lastName: "Thornton", handle: "@fat" },
        { id: 3, firstName: "Larry", lastName: "the Bird", handle: "@twitter" },
        { id: 4, firstName: "Mark", lastName: "Otto", handle: "@mdo" },
    ];
    const tableCol=cols || [
        {
            id:1,
            col:'ID'
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
        <div className="mt-4 p-4 shadow-2xl w-max overflow-x-auto">
            <div className="mt-2">
                <div className={SmallTable}>
                    <h5 className="py-2 px-10 mb-4">{title}</h5>
                    <div className="overflow-x-auto">
                        <table className={`table-auto w-full sm:table-fixed ${Striped}`}>
                            <thead>
                                <tr>
                                    {tableCol.map((col: TableCol) => (
                                        <th key={col.id} className={`text-xs ${Border}`}>
                                            {col.col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className={Border}>
                                {tableData.map((row: TableRow) => (
                                    <tr key={row.id} className={hoverStyling}>
                                        <td className={`px-10 ${Border} border-gray border-t py-2`}>{row.id}</td>
                                        <td className={`px-10 ${Border} border-gray border-t py-2`}>{row.firstName}</td>
                                        <td className={`px-10 ${Border} border-gray border-t py-2`}>{row.lastName}</td>
                                        <td className={`px-10 ${Border} border-gray border-t py-2`}>{row.handle}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}