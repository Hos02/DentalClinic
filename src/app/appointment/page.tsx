"use client"

import * as React from "react"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "@/i18n/LanguageProvider"

export default function AppointmentPage() {
	const { t } = useTranslation()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [doctor, setDoctor] = useState("")
	const [time, setTime] = useState("")
	const [notes, setNotes] = useState("")
	const [date, setDate] = useState<Date | undefined>(undefined)
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const doctors = [
		{ id: "dr_smith", name: "Dr. Smith" },
		{ id: "dr_jones", name: "Dr. Jones" },
		{ id: "dr_lee", name: "Dr. Lee" },
	]

	const times = [
		"09:00 AM",
		"10:00 AM",
		"11:00 AM",
		"01:00 PM",
		"02:00 PM",
		"03:00 PM",
	]

	function validate() {
		if (!name.trim()) return t.appointment.validationName
		if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
			return t.appointment.validationEmail
		if (!phone.trim()) return t.appointment.validationPhone
		if (!date) return t.appointment.validationDate
		if (!time) return t.appointment.validationTime
		if (!doctor) return t.appointment.validationDoctor
		return null
	}

	function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setError(null)
		const err = validate()
		if (err) {
			setError(err)
			return
		}

		// For now do a client-side confirmation only.
		setSubmitted(true)
	}

	if (submitted) {
		return (
			<main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white py-12">
				<section className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
					<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
						<h1 className="mb-3 text-2xl font-semibold text-gray-900">{t.appointment.requested}</h1>
						<p className="mb-6 text-gray-700">{t.appointment.thanks.replace("{name}", name)}</p>
						<div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
							<p className="mb-1"><strong>{t.appointment.date}:</strong> {date?.toLocaleDateString()}</p>
							<p className="mb-1"><strong>{t.appointment.time}:</strong> {time}</p>
							<p className="mb-1"><strong>{t.appointment.doctor}:</strong> {doctors.find(d => d.id === doctor)?.name}</p>
							<p className="mb-1"><strong>{t.appointment.email}:</strong> {email}</p>
							<p className="mb-1"><strong>{t.appointment.phone}:</strong> {phone}</p>
							{notes && <p className="mt-2"><strong>{t.appointment.notes}:</strong> {notes}</p>}
						</div>
						<div className="mt-6">
							<Button onClick={() => setSubmitted(false)} className="w-full sm:w-auto">{t.appointment.makeAnother}</Button>
						</div>
					</div>
				</section>
			</main>
		)
	}

	return (
		<main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white py-12">
			<section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
				<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
					<h1 className="mb-6 text-2xl font-semibold text-gray-900 sm:text-3xl">{t.appointment.bookTitle}</h1>

					<form onSubmit={onSubmit} className="grid gap-6">
				{error && (
					<div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
						{error}
					</div>
				)}

				<div>
					<label className="block text-sm font-medium mb-2">{t.appointment.fullName}</label>
					<Input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.appointment.fullNamePlaceholder} />
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<label className="block text-sm font-medium mb-2">{t.appointment.email}</label>
						<Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.appointment.emailPlaceholder} type="email" />
					</div>
					<div>
						<label className="block text-sm font-medium mb-2">{t.appointment.phone}</label>
						<Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.appointment.phonePlaceholder} />
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-4 items-start">
					<div>
						<label className="block text-sm font-medium mb-2">{t.appointment.chooseDate}</label>
						<div className="rounded-lg border border-gray-200 p-2">
							<Calendar
								mode="single"
								selected={date}
								onSelect={(d) => setDate(d as Date | undefined)}
								fromDate={new Date()}
							/>
						</div>
					</div>

					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium mb-2">{t.appointment.doctor}</label>
							<Select onValueChange={(val) => setDoctor(val)}>
								<SelectTrigger>
									<SelectValue placeholder={t.appointment.doctorSelect} />
								</SelectTrigger>
								<SelectContent>
									{doctors.map((d) => (
										<SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">{t.appointment.time}</label>
							<Select onValueChange={(val) => setTime(val)}>
								<SelectTrigger>
									<SelectValue placeholder={t.appointment.timeSelect} />
								</SelectTrigger>
								<SelectContent>
									{times.map((t) => (
										<SelectItem key={t} value={t}>{t}</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">{t.appointment.notes}</label>
							<Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t.appointment.additionalInfo} />
						</div>
					</div>
				</div>

				<div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
					<Button type="submit" className="w-full sm:w-auto">{t.appointment.requestAppointment}</Button>
				</div>
					</form>
				</div>
			</section>
		</main>
	)
}
  