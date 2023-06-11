import { json } from "@remix-run/node"
import { useActionData } from "@remix-run/react"

export const action = async({request}) => {
	const body = await request.formData()
	const firstName = await body.get('firstName')
	console.log(firstName)
	return json({name: firstName})
}

export default function Hello() {
	const {name} = useActionData()
	return (
		<div>
			<h1>Hello {name}</h1>
		</div>
	)
}