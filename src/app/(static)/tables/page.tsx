import HoverTable from './hoverTable';
import AddData from '@/elements/AddData'
export default function Tables(){
    return(
        <div className='container flex gap-4 flex-wrap'>
            <AddData />
             <HoverTable  title='Basic Table' />
            {/* <HoverTable  title='Basic Table' />
            <HoverTable border={true} title='Bordered Table' />
            <HoverTable striped={true}  title='Striped Table' />
            <HoverTable hoverStyle={true} title='Hover Table' />
            <HoverTable smallTable={true} title='Small Table'/> */}
        </div>
    )
} 