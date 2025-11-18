"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import type { ContactFormState } from "@/app/contact/actions";
import { sendContact } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-2xl bg-gradient-to-r from-accent-iris to-accent-electric px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:translate-y-[-2px] disabled:opacity-60"
    >
      {pending ? "Envoi en cours..." : "Envoyer"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-6 rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30"
    >
      <div>
        <label htmlFor="name" className="text-xs uppercase tracking-[0.35em] text-white/60">
          Nom complet
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 focus:border-accent-electric focus:outline-none"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs uppercase tracking-[0.35em] text-white/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 focus:border-accent-electric focus:outline-none"
          placeholder="vous@entreprise.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-[0.35em] text-white/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 focus:border-accent-electric focus:outline-none"
          placeholder="Parlez-moi de votre projet, de votre stack, de vos enjeux…"
        />
      </div>
      <SubmitButton />
      {state.status !== "idle" && state.message && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${state.status === "error" ? "text-red-400" : "text-emerald-400"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
