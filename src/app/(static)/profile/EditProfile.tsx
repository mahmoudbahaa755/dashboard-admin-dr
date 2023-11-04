import Input from '@/elements/Input'
import Button from '@/elements/Button'

const fields = [
  { label: 'First name', type: 'text', value: 'Mark' },
  { label: 'Last name', type: 'text', value: 'Jhonsan' },
  { label: 'Email', type: 'email', value: 'mark@example.com' },
  { label: 'Change profile', type: 'file' },
  { label: 'Website', type: 'url' },
  { label: 'Address', type: 'text', placeholder: 'Street' },
  { label: 'City', type: 'text', placeholder: 'City' },
  { label: 'State', type: 'text', placeholder: 'State' },
  { label: 'Username', type: 'text', value: 'jhonsanmark' },
  { label: 'Password', type: 'password', value: '11111122333' },
  { label: 'Confirm password', type: 'password', value: '11111122333' },
]

export default function EditProfile(){
    return(
        <div className="flex flex-col min-h-screen py-2 sm:px-6 lg:px-8">
            <form className="">
                <div className=' '>

                {fields.map((field, index) => (
                    <div key={index} className="mb-2">
                        <Input mainClass='flex flex-row gap-3' type={field.type} label={field.label} value={field.value} placeholder={field.placeholder} />
                    </div>
                ))}
                </div>

                <div className="flex flex-row gap-4 mt-4">
                    <Button name='Save Changes'
                    type='button'
                    classes='py-2 px-4 bg-blue-500 rounded focus:outline-none focus:shadow-outline  hover:bg-blue-700 text-white font-bold '
                    />
                    <Button name='Cancel'
                    type='button'
                    classes='py-2 px-4  rounded focus:outline-none focus:shadow-outline bg-burble hover:bg-blue-700 text-white font-bold '
                    />
                </div>
            </form>
        </div>
    )
}