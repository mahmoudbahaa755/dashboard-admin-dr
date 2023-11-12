
interface FormProps {
    hasBorderRadius?: boolean;
    label: string;
    placeholder: string;
}

const forms: FormProps[] = [
    {
        hasBorderRadius: false,
        label: 'Name',
        placeholder: 'Enter Your Name',
    },
    {
        hasBorderRadius: false,
        label: 'Email',
        placeholder: 'Enter Your Email Address',
    },
    {
        hasBorderRadius: false,
        label: 'Mobile',
        placeholder: 'Enter Your Mobile Number',
    },
    {
        hasBorderRadius: false,
        label: 'Password',
        placeholder: 'Enter Password',
    },
    {
        hasBorderRadius: false,
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
    },
];

export default function Form({ hasBorderRadius = false }: FormProps) {
    // const inputClass = hasBorderRadius
    //     ? 'shadow appearance-none border-gray border-5 rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    //     : 'shadow appearance-none border-gray border-5 focus:outline-none focus:border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight';

    
    return (
        <div className="flex text-white container justify-center">
            <div className="w-full max-w-md">
                <div className="shadow-2xl bg-inner rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 font-bold text-xl text-white ">{hasBorderRadius ? 'Round Vertical Form' : 'Vertical Form'}</div>
                    <hr className="mb-4" />
                    <form>
                        {forms.map((form) => (
                            <div className="mb-4" key={form.label}>
                                <label className="block text-white   font-bold mb-2" htmlFor={`input-${form.label}`}>
                                    {form.label}
                                </label>
                            <input className='shadow border-2 border-solid  rounded w-full 
                            py-2 px-3 text-gray-900 transition-all ease-in-out duration-200 
                            focus:border-8 focus:border-gray-600' id={`input-${form.label}`} type="text" placeholder={form.placeholder} />     
                             </div>
                        ))}
                  
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 sm:mb-0"
                                type="submit"
                            >
                                Register
                            </button>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}