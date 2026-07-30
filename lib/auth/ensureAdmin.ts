import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db'
import { Admin } from '@/lib/models/Admin'

export async function ensureAdminAccount() {
  await connectDB()

  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase()
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    throw new Error('Missing ADMIN_EMAIL or ADMIN_PASSWORD in .env.local')
  }

  let admin = await Admin.findOne({ email }).select('+password')

  if (!admin) {
    const passwordHash = await bcrypt.hash(password, 12)
    admin = await Admin.create({
      fullName: 'AOM Adda Admin',
      email,
      password: passwordHash,
    })
    return admin
  }

  const matches = admin.password ? await bcrypt.compare(password, admin.password) : false
  if (!matches) {
    admin.password = await bcrypt.hash(password, 12)
    await admin.save()
  }

  return admin
}
