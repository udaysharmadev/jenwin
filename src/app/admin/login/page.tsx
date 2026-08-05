import { redirect } from 'next/navigation'
import LoginForm from './LoginForm'

// Force dynamic rendering — this page requires Supabase at runtime, not build time
export const dynamic = 'force-dynamic'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-[#080808] border border-[#1a1a1a] rounded-2xl p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-display font-bold text-white mb-2">
            <span className="text-[#DC143C]">JEN</span>WIN.
          </h1>
          <p className="text-sm text-[#777]">Admin Portal</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
