import React from "react";
import Banner from "../atoms/Banner";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { sendMail } from "../sdconfig";

export default function TextInput(props) {
	const schema = yup.object().shape({
		email: yup
			.string()
			.email("Formato email non valido")
			.required("Campo richiesto"),
		name: yup.string().required("Campo richiesto"),
		object: yup.string().required("Campo richiesto"),
		text: yup.string().required("Campo richiesto"),
	});

	const initialValues = {
		name: "",
		email: "",
		object: "",
		text: "",
	};

	const onSubmitHandler = (data, { resetForm }) => {
		sendMail(props.mail, data.email, data.name, data.object, data.text);

		const banner = document.getElementById("form-banner");
		banner.className = "block mt-24";
		resetForm();
		setTimeout(() => {
			banner.className = "hidden mt-24";
		}, 3000);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={schema}
			onSubmit={onSubmitHandler}
		>
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
							<ErrorMessage
								name="name"
								render={(msg) => (
									<div className="flex flex-row items-center text-red-600 font-poppins">
										{msg}
										<ExclamationCircleIcon
											className="w-5 h-5 ml-1 text-red-500"
											aria-hidden="true"
										/>
									</div>
								)}
							/>
						</div>
						<div>
							<Field
								className="block w-full h-12 p-2 pr-10 text-white bg-transparent border-2 rounded-lg placeholder-gray border-green font-fira focus:outline-none focus:ring-green focus:border-green"
								id="email"
								name="email"
								placeholder="Email"
							/>
							<ErrorMessage
								name="email"
								render={(msg) => (
									<div className="flex flex-row items-center text-red-600 font-poppins">
										{msg}
										<ExclamationCircleIcon
											className="w-5 h-5 ml-1 text-red-500"
											aria-hidden="true"
										/>
									</div>
								)}
							/>
						</div>
					</div>
					<Field
						className="block w-full h-12 p-2 pr-10 text-white bg-transparent border-2 rounded-lg placeholder-gray border-green font-fira focus:outline-none focus:ring-green focus:border-green"
						id="object"
						name="object"
						placeholder="Oggetto"
					/>
					<ErrorMessage
						name="object"
						render={(msg) => (
							<div className="flex flex-row items-center text-red-600 font-poppins">
								{msg}
								<ExclamationCircleIcon
									className="w-5 h-5 ml-1 text-red-500"
									aria-hidden="true"
								/>
							</div>
						)}
					/>
					<Field
						className="w-full p-2 text-white bg-transparent border-2 rounded-lg h-52 placeholder-gray mt-7 border-green font-fira focus:outline-none focus:ring-green focus:border-green"
						id="text"
						name="text"
						placeholder="Testo"
						as="textarea"
					/>
					<ErrorMessage
						name="text"
						render={(msg) => (
							<div className="flex flex-row items-center text-red-600 font-poppins">
								{msg}
								<ExclamationCircleIcon
									className="w-5 h-5 ml-1"
									aria-hidden="true"
								/>
							</div>
						)}
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
					<Banner id="form-banner" />
				</div>
			</Form>
		</Formik>
	);
}
