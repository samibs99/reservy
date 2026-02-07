"use client";

import React from "react";
import Link from "next/link";

export default function ProRegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex">
      {/* Left image panel (hidden on small screens) */}
      <aside className="hidden lg:block w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
          alt="Décor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent" />
        <div className="absolute top-6 left-6 text-white font-bold text-2xl">R.</div>
      </aside>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-lg bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold mb-2">Inscrivez-vous gratuitement</h1>
          <p className="text-gray-600 mb-6">Vous avez déjà un compte? <Link href="/pro/login" className="text-purple-600">Inscrivez-vous</Link></p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nom</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Prenom</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mot de passe</label>
              <input type="password" className="w-full border rounded px-3 py-2" placeholder="6+ caractères" />
            </div>

            <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded">Inscription</button>
          </form>

          <p className="mt-4 text-xs text-center text-gray-600">En vous inscrivant, vous acceptez les <a href="#" className="underline">Conditions d'utilisation</a> et la <a href="#" className="underline">Politique de confidentialité</a>.</p>
        </div>
      </div>
    </main>
  );
}
