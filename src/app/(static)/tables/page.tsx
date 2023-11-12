import HoverTable from './hoverTable';
// import AddData from '@/elements/AddData'
import BlogsTable from './BlogsTable'
import Link from "next/link";

export default function Tables(){
    return(
        <div className='container '>
           <div className='flex justify-end '>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link  href='./blogs'>
    Add Blog
</Link>
  </button>
            </div>
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