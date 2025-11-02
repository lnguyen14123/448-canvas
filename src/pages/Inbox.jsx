import React, { useMemo, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { MailPlus, Send, Paperclip, Search, Settings, X, Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function Inbox() {
    const [settingsOpen, setSettingsOpen] = useState(false);
	const [showInbox, setShowInbox] = useState(true);
	const [showCourses, setShowCourses] = useState(true);
	const [selectedThread, setSelectedThread] = useState(null);



    // Local data: courses + people
    const COURSES = [
        {
            id: "c448",
            name: "CECS 448",
            people: [
				{ id: "u0", name: "— Course",email:"Send to entire class",role:""},
                { id: "u1", name: "Olivia Brown", email: "olivia.brown@example.edu", role: "Student" },
                { id: "u2", name: "Prof. Parker", email: "prof.parker@example.edu", role: "Instructor" },
                { id: "u3", name: "TA Miller", email: "ta.miller@example.edu", role: "TA" },
                { id: "u4", name: "Ethan Davis", email: "ethan.davis@example.edu", role: "Student" },
                { id: "u5", name: "Sophia Wilson", email: "sophia.wilson@example.edu", role: "Student" },
            ],
        },
        {
            id: "c101",
            name: "CS101",
            people: [
				{ id: "u10", name: "— Course",email:"Send to entire class",role:""},
                { id: "u11", name: "Liam Martinez", email: "liam.martinez@example.edu", role: "Student" },
                { id: "u12", name: "Emma Lewis", email: "emma.lewis@example.edu", role: "Student" },
                { id: "u13", name: "Prof. Johnson", email: "prof.johnson@example.edu", role: "Instructor" },
            ],
        },
        {
            id: "c201",
            name: "Math201",
            people: [
				{ id: "u20", name: "— Course",email:"Send to entire class",role:""},
                { id: "u21", name: "Noah Anderson", email: "noah.anderson@example.edu", role: "Student" },
                { id: "u22", name: "Ava Thompson", email: "ava.thompson@example.edu", role: "Student" },
                { id: "u23", name: "Prof. Carter", email: "prof.carter@example.edu", role: "Instructor" },
            ],
        },
        {
            id: "c102",
            name: "ENG102",
            people: [
				{ id: "u30", name: "— Course",email:"Send to entire class",role:""},
                { id: "u31", name: "Mia Harris", email: "mia.harris@example.edu", role: "Student" },
                { id: "u32", name: "Lucas Clark", email: "lucas.clark@example.edu", role: "Student" },
                { id: "u33", name: "Prof. Collins", email: "prof.collins@example.edu", role: "Instructor" },
            ],
        },
        {
            id: "c210",
            name: "HIST210",
            people: [
				{ id: "u40", name: "— Course",email:"Send to entire class",role:""},
                { id: "u41", name: "James Walker", email: "james.walker@example.edu", role: "Student" },
                { id: "u42", name: "Grace Turner", email: "grace.turner@example.edu", role: "Student" },
                { id: "u43", name: "Prof. Brooks", email: "prof.brooks@example.edu", role: "Instructor" },
            ],
        },
    ];

    const THREADS = [
		{
			id: "t1",
			title: "Welcome to CECS 448",
			last: "Syllabus attached.",
			ts: "2025-09-01 10:03",
			unread: false,
			messages: [
				{
					from: "Instructor <prof.jones@example.edu>",
					to: "You",
					body: "Welcome to CECS 448! Please review the attached syllabus before next class.",
				},
			],
		},
		{
			id: "t2",
			title: "Project 1",
			last: "Project1 posted.",
			ts: "2025-10-02 14:21",
			unread: true,
			messages: [
				{
					from: "TA <ta.lee@example.edu>",
					to: "You",
					body: "Hi everyone, Project 1 has been posted on BeachBoard. Let us know if you have questions.",
				},
			],
		},
	];

    const [selectedCourseId, setSelectedCourseId] = useState(COURSES[0].id);

	const handleThreadClick = (thread) => {
		setSelectedThread(thread);
		setShowInbox(false);
	};

	const handleBackToInbox = () => {
		setSelectedThread(null);
		setShowInbox(true);
	};

    return (
        <div className="min-h-screen flex bg-white text-gray-900">
            <Sidebar />

            <div className="flex-1 grid grid-cols-12">
                {/* Left: mailbox */}
				{showInbox && !selectedThread && (
                <div className="col-span-4 border-r bg-gray-50/60 min-h-screen flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-10">
                        <div className="flex items-center gap-2">
                            <MailPlus className="w-5 h-5" />
                            <h1 className="font-semibold">Inbox</h1>
                        </div>

                        <button
                            className="p-2 rounded-lg hover:bg-gray-100"
                            onClick={() => setSettingsOpen(true)}
                            aria-label="Open settings"
                        >
                            <Settings className="w-5 h-5" />
                        </button>
                    </div>
                    <Mailbox threads={THREADS} onSelectThread={handleThreadClick} />
                </div>
				)}
				<div className={`min-h-screen flex flex-col ${showInbox ? "col-span-8" : "col-span-12"}`}>
					<div className="flex items-center justify-between p-4 border-b bg-white">
						<h1 className="font-semibold text-lg">{selectedThread ? "Message Thread" : "Compose Message"}</h1>

						{/* Toggle buttons */}
						<div className="flex items-center gap-2">
							<button
								className="p-2 rounded-lg hover:bg-gray-100 flex items-center gap-1 text-sm"
								onClick={() => setShowInbox((v) => !v)}
							>
								{showInbox ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
								<span>{showInbox ? "Hide Inbox" : "Show Inbox"}</span>
							</button>
						</div>
				</div>
				{selectedThread ? (
					<ThreadDetail thread={selectedThread} onBack={handleBackToInbox} />
				) : (
					<>


                {/* Right: course buttons + composer */}
				{showCourses && (
                    <CourseHeader
                        courses={COURSES}
                        selectedCourseId={selectedCourseId}
                        onChange={setSelectedCourseId}
                    />
				)}
                    <Composer courses={COURSES} selectedCourseId={selectedCourseId} />
					</>
					)}
                </div>
            </div>

            {settingsOpen && <SettingsPanel onClose={() => setSettingsOpen(false)} />}
        </div>
    );
}

function Mailbox({ threads, onSelectThread }) {
    const [q, setQ] = useState("");
    const items = useMemo(() => {
        if (!q) return threads;
        return threads.filter((t) => t.title.toLowerCase().includes(q.toLowerCase()));
    }, [q, threads]);

    return (
        <div className="flex-1 flex flex-col">
            <div className="p-3">
                <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search"
                        className="w-full pl-9 pr-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>
            </div>

            <div className="overflow-auto">
                {items.map((t) => (
                    <div key={t.id} className="px-3">
                        <div 
                            className={`border rounded-lg p-3 mb-2 bg-white hover:bg-gray-50 transition ${t.unread ? "border-amber-200" : "border-gray-200"
                                }`}
								onClick={() => onSelectThread(t)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="font-medium truncate mr-2">{t.title}</div>
                                <div className="text-xs text-gray-500">{t.ts}</div>
                            </div>
                            <div className="text-xs text-gray-600 truncate">{t.last}</div>
                        </div>
                    </div>
                ))}
                {items.length === 0 && (
                    <div className="px-4 py-10 text-center text-sm text-gray-500">No results</div>
                )}
            </div>
        </div>
    );
}

function CourseHeader({ courses, selectedCourseId, onChange }) {
    return (
        <div className="p-4 border-b bg-white flex items-center gap-3">
            <span className="text-sm text-gray-600">Course</span>
            <div className="flex flex-wrap gap-2">
                {courses.slice(0, 5).map((c) => {
                    const isSelected = selectedCourseId === c.id;
                    return (
                        <button
                            key={c.id}
                            onClick={() => onChange(c.id)}
                            className={`px-3 py-1.5 rounded-full border text-sm font-medium transition ${isSelected
                                    ? "bg-[#FFC72C] text-black border-[#FFC72C] hover:bg-amber-300"
                                    : "border-gray-300 text-gray-800 hover:bg-gray-100"
                                }`}
                        >
                            {c.name}
                        </button>
                    );
                })}
                {/* All courses option */}
                <button
                    onClick={() => onChange("all")}
                    className={`px-3 py-1.5 rounded-full border text-sm font-medium transition ${selectedCourseId === "all"
                            ? "bg-[#FFC72C] text-black border-[#FFC72C] hover:bg-amber-300"
                            : "border-gray-300 text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    All
                </button>
            </div>
        </div>
    );
}

function ThreadDetail({ thread, onBack }) {
	return (
		<div className="flex-1 p-6">
			<button
				onClick={onBack}
				className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black mb-4"
			>
				<ArrowLeft className="w-4 h-4" /> Back to Inbox
			</button>

			<div className="border rounded-2xl shadow-sm bg-white p-6">
				<h2 className="text-xl font-semibold mb-2">{thread.title}</h2>
				<div className="text-sm text-gray-500 mb-4">{thread.ts}</div>

				{thread.messages.map((msg, i) => (
					<div key={i} className="mb-6">
						<div className="text-sm font-medium text-gray-800">
							From: {msg.from}
						</div>
						<div className="text-sm text-gray-700">To: {msg.to}</div>
						<p className="mt-3 text-gray-900 whitespace-pre-line">{msg.body}</p>
					</div>
				))}
			</div>
		</div>
	);
}

function Composer({ courses, selectedCourseId }) {
    const course = useMemo(
        () => courses.find((c) => c.id === selectedCourseId),
        [courses, selectedCourseId]
    );

    // All participants (remove duplicates)
    const allPeople = useMemo(() => {
        const map = new Map();
        for (const c of courses) for (const p of c.people) if (!map.has(p.id)) map.set(p.id, p);
        return Array.from(map.values());
    }, [courses]);

    const isAll = selectedCourseId === "all";

    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [attachments, setAttachments] = useState([]);
    const [sent, setSent] = useState(false);

    // Reset/ preset when switching courses
    useEffect(() => {
        if (!isAll && course?.name === "CECS 448") {
            setTo("Olivia Brown");
            setSubject("448 project");
            setBody("Hi.");
        } else {
            setTo("");
            setSubject("");
            setBody("");
        }
    }, [selectedCourseId, isAll, course]);

    const options = useMemo(() => (isAll ? allPeople : course?.people || []), [isAll, course, allPeople]);

    useEffect(() => {
        if (!to) return;
        const v = to.toLowerCase();
        const ok = options.some((p) => p.name.toLowerCase() === v || p.email.toLowerCase() === v);
        if (!ok) setTo("");
    }, [options, to]);

    const exact = useMemo(() => {
        const v = to.trim().toLowerCase();
        return options.find((p) => p.name.toLowerCase() === v || p.email.toLowerCase() === v) || null;
    }, [to, options]);

    const allowSend = Boolean(exact && subject.trim() && body.trim());

    const handleSend = () => {
        setSent(true);
        setTimeout(() => setSent(false), 1800);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="border rounded-2xl shadow-sm overflow-hidden">
                {/* Compose header */}
                <div className="p-4 border-b bg-white flex items-center gap-3">
                    <span className="text-sm text-gray-700">Compose</span>
                    <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: "#FFC72C" }} />
                </div>

                <div className="p-4 space-y-4 bg-white">
                    {/* To dropdown */}
                    <div>
                        <label className="text-xs font-medium text-gray-600">
                            To {isAll ? "(All)" : `(from ${course?.name})`}
                        </label>
                        <select
                            value={exact ? exact.name : ""}
                            onChange={(e) => setTo(e.target.value)}
                            className="w-full mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                            <option value="">Select recipient</option>
                            {options.map((p) => (
                                <option key={p.id} value={p.name}>
                                    {p.name} — {p.email}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="text-xs font-medium text-gray-600">Subject</label>
                        <input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Subject"
                            className="w-full mt-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-xs font-medium text-gray-600">Message</label>
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Write your message"
                            className="w-full mt-1 min-h-[140px] rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <div className="flex items-center gap-2 mt-2 text-xs">
                            <button className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200" onClick={() => setBody("Hi.")}>
                                Hi
                            </button>
                            <button
                                className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                                onClick={() =>
                                    setBody((b) =>
                                        b ? b + (b.endsWith("\n") ? "" : "\n") + "Thank you,\n" : "Thank you,\n"
                                    )
                                }
                            >
                                Thank you
                            </button>
                        </div>
                    </div>

                    {/* Attachments (Mock data) */}
                    <div className="flex items-center gap-2">
                        <button
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-50"
                            onClick={() => setAttachments((a) => [...a, { name: `file-${a.length + 1}.pdf` }])}
                        >
                            <Paperclip className="w-4 h-4" /> Attach
                        </button>
                        <div className="flex flex-wrap gap-2">
                            {attachments.map((f, i) => (
                                <span key={i} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-gray-100 border">
                                    {f.name}
                                    <button onClick={() => setAttachments((a) => a.filter((_, idx) => idx !== i))}>
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Send */}
                <div className="p-4 border-t bg-gray-50 flex items-center justify-end">
                    <button
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-black transition ${allowSend ? "bg-[#FFC72C] hover:bg-amber-300" : "bg-gray-300 cursor-not-allowed"
                            }`}
                        disabled={!allowSend}
                        onClick={handleSend}
                        title={
                            !allowSend
                                ? "Select a valid recipient and fill in subject & message"
                                : "Send message"
                        }
                    >
                        <Send className="w-4 h-4" />
                        Send
                    </button>
                </div>
            </div>

            {sent && (
                <div className="fixed bottom-6 right-6 z-50">
                    <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-lg">
                        Message sent
                    </div>
                </div>
            )}
        </div>
    );
}

// Inbox settings
function SettingsPanel({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex">
            <div className="flex-1 bg-black/30" onClick={onClose} />
            <div className="w-full max-w-sm bg-white h-full shadow-xl border-l p-4 flex flex-col">
                <div className="flex items-center justify-between border-b pb-3 mb-3">
                    <h2 className="font-semibold">Inbox Settings</h2>
                    <button className="p-2 rounded hover:bg-gray-100" onClick={onClose}>
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                        <span>Response On/Off</span>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="peer h-5 w-9 rounded-full bg-gray-300 peer-checked:bg-amber-400 relative transition">
                                <div className="h-4 w-4 bg-white rounded-full absolute top-0.5 left-0.5 peer-checked:translate-x-4 transition" />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="mt-auto pt-4 border-t">
                    <button className="w-full px-4 py-2 rounded-lg border hover:bg-gray-50" onClick={onClose}>
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}