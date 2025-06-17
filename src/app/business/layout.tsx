'use client'
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Navbar from "@/components/business/Navbar";


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <ProtectedRoute>
      <div className="flex flex-col h-screen">
        <Navbar />
          <main className="w-full bg-gray-50 overflow-y-auto px-6">
            {children}
          </main>
      </div>
    </ProtectedRoute>
  );
}
