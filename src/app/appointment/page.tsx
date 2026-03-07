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

export default function AppointmentPage() {
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
		if (!name.trim()) return "Please enter your full name"
		if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
			return "Please enter a valid email address"
		if (!phone.trim()) return "Please enter your phone number"
		if (!date) return "Please choose a date"
		if (!time) return "Please choose a time"
		if (!doctor) return "Please choose a doctor"
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
			<main className="max-w-3xl mx-auto py-12">
				<h1 className="text-2xl font-semibold mb-4">Appointment requested</h1>
				<p className="mb-6">Thank you, {name}. Your appointment request has been received.</p>
				<div className="rounded-md border p-4 bg-background">
					<p className="mb-1"><strong>Date:</strong> {date?.toLocaleDateString()}</p>
					<p className="mb-1"><strong>Time:</strong> {time}</p>
					<p className="mb-1"><strong>Doctor:</strong> {doctors.find(d => d.id === doctor)?.name}</p>
					<p className="mb-1"><strong>Email:</strong> {email}</p>
					<p className="mb-1"><strong>Phone:</strong> {phone}</p>
					{notes && <p className="mt-2"><strong>Notes:</strong> {notes}</p>}
				</div>
				<div className="mt-6">
					<Button onClick={() => setSubmitted(false)}>Make another appointment</Button>
				</div>
			</main>
		)
	}

	return (
		<main className="max-w-3xl mx-auto py-12">
			<h1 className="text-2xl font-semibold mb-6">Book an appointment</h1>

			<form onSubmit={onSubmit} className="grid gap-6">
				{error && <div className="text-destructive">{error}</div>}

				<div>
					<label className="block text-sm font-medium mb-2">Full name</label>
					<Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block text-sm font-medium mb-2">Email</label>
						<Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" type="email" />
					</div>
					<div>
						<label className="block text-sm font-medium mb-2">Phone</label>
						<Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 555-5555" />
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-4 items-start">
					<div>
						<label className="block text-sm font-medium mb-2">Choose date</label>
						<Calendar
							mode="single"
							selected={date}
							onSelect={(d) => setDate(d as Date | undefined)}
							fromDate={new Date()}
						/>
					</div>

					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium mb-2">Doctor</label>
							<Select onValueChange={(val) => setDoctor(val)}>
								<SelectTrigger>
									<SelectValue placeholder="Select a doctor" />
								</SelectTrigger>
								<SelectContent>
									{doctors.map((d) => (
										<SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">Time</label>
							<Select onValueChange={(val) => setTime(val)}>
								<SelectTrigger>
									<SelectValue placeholder="Select a time" />
								</SelectTrigger>
								<SelectContent>
									{times.map((t) => (
										<SelectItem key={t} value={t}>{t}</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">Notes</label>
							<Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any additional information..." />
						</div>
					</div>
				</div>

				<div>
					<Button type="submit">Request appointment</Button>
				</div>
			</form>
		</main>
	)
}
  