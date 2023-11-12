import HoverTable from './hoverTable';
// import AddData from '@/elements/AddData'
import BlogsTable from './BlogsTable'
import Link from "next/link";

export default function Tables(){
    return(
        <div className='container '>
            <button>
                <Link href='./blogs'>
                add blog
                </Link>
                </button>
            {/* <AddData /> */}
             {/* <HoverTable  title='Basic Table' /> */}
             <BlogsTable />
            {/* <HoverTable  title='Basic Table' />
            <HoverTable border={true} title='Bordered Table' />
            <HoverTable striped={true}  title='Striped Table' />
            <HoverTable hoverStyle={true} title='Hover Table' />
            <HoverTable smallTable={true} title='Small Table'/> */}
        </div>
    )
} 