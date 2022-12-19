import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function TextInput(props) {
	const initialValues = {
		name: "",
		email: "",
		object: "",
		text: "",
	};

	return (
		<Formik initialValues={initialValues} onSubmit={""}>
			<Form>
				<div className="pl-10">
					<div className="grid w-full grid-cols-2 gap-8 mb-7">
						<div>
							<Field
								className="block w-full h-12 p-2 pr-10 text-white bg-transparent border-2 rounded-lg placeholder-gray border-green font-fira focus:outline-none focus:ring-green focus:border-green"
								id="name"
								name="name"
								placeholder="Nome"
							/>
						</div>
						<div>
							<Field
								className="block w-full h-12 p-2 pr-10 text-white bg-transparent border-2 rounded-lg placeholder-gray border-green font-fira focus:outline-none focus:ring-green focus:border-green"
								id="email"
								name="email"
								placeholder="Email"
							/>
						</div>
					</div>
					<Field
						className="block w-full h-12 p-2 pr-10 text-white bg-transparent border-2 rounded-lg placeholder-gray border-green font-fira focus:outline-none focus:ring-green focus:border-green"
						id="object"
						name="object"
						placeholder="Oggetto"
					/>
					<Field
						className="w-full p-2 text-white bg-transparent border-2 rounded-lg h-52 placeholder-gray mt-7 border-green font-fira focus:outline-none focus:ring-green focus:border-green"
						id="text"
						name="text"
						placeholder="Testo"
						as="textarea"
					/>
					<div className="absolute mt-8">
						<button
							type="submit"
							className="px-3 py-1 text-base font-medium text-white transition duration-300 ease-in bg-black border rounded-lg border-green font-fira hover:bg-transparent hover:cursor-pointer"
						>
							Invio -&gt;
						</button>
						<div className="absolute left-0 inline-block px-3 py-1 text-base font-medium text-white border rounded-lg border-green font-fira bg-gradient-to-r from-green to-gray -z-10">
							Invio -&gt;{" "}
						</div>
					</div>
				</div>
			</Form>
		</Formik>
	);
}
