import { json } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/server/db';
import User from '$lib/server/models/User';

export async function GET() {
	await connectToDatabase();
	const users = await User.find().sort({ createdAt: -1 }).lean();
	return json(users);
}

export async function POST({ request }) {
	await connectToDatabase();
	const { interviewee, interviewTitle, word, count, category, date } = await request.json();
	const user = await User.create({ interviewee, interviewTitle, word, count, category, date });
	return json(user, { status: 201 });
}
