import Image from 'next/image';
import ProgressBar from '@/elements/ProgressBar';

const SiteData = () => {
    const data = [
        { title: 'Total Orders', value: 9526, icon: '/svg/cart-shopping.svg', progress: 55, change: '+4.2' },
        { title: 'Total Revenue', value: 8323, icon: '/svg/dollar.svg', progress: 55, change: '-1.2' },
        { title: 'Visitors', value: 6200, icon: '/svg/cart-shopping.svg', progress: 55, change: '+5.2' },
        { title: 'Messages', value: 5630, icon: '/svg/cart-shopping.svg', progress: 55, change: '+2.2' },
    ];
    
    return(
        <div className="">
            <div>
                <div className="flex flex-wrap m-0">
                    {data.map((item, index) => (
                        <div key={index} className="w-1/4 px-2 border-l border-gray">
                            <div >
                                <h5 className="text-white flex flex-row justify-between mb-0">
                                    {item.value} <span className="float-right">
                                        <Image src={item.icon} alt={item.title} width={20} height={20}/>
                                    </span>
                                </h5>
                                <ProgressBar completed={item.progress}/>
                                <p className="mb-0 text-white small-font">
                                    {item.title} <span className={`float-right ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{item.change}%</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SiteData;