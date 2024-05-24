import { Form, useNavigation } from 'react-router-dom'


export async function action({request}) {
    const body = await request.formData()

    try {
        const response = await fetch("http://localhost:3000/single", {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
            body: body
        })
        const fileData = await response.json() 
        console.log(fileData);
    } catch (error) {
        console.log(error);
        return
    }
   return {}
}

export default function Root() {
    const navigation = useNavigation()
    return (
        <Form className="flex-row items-center mx-auto my-10" method="post" encType='multipart/form-data'>
          <input
            type="file"
            name="single_file"
            className="file-input file-input-bordered file-input-lg w-full max-w-xs"
               required />
                <button className='btn btn-primary mx-5'> {navigation.state ==='submitting' ? <span className="loading loading-infinity loading-md"></span>: 'Send file'} </button>
        </Form>
    )
}