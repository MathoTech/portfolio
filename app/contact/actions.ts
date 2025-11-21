"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const resend =
  process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.length > 0
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

const CONTACT_FROM = process.env.RESEND_FROM_EMAIL;
const CONTACT_TO = process.env.CONTACT_RECIPIENT_EMAIL;

export async function sendContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const message = (formData.get("message") ?? "").toString().trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Merci de renseigner votre nom, email et message."
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "Adresse email invalide."
    };
  }

  if (!resend || !CONTACT_FROM || !CONTACT_TO) {
    console.error("Resend n'est pas configure.");
    return {
      status: "error",
      message: "Configuration email manquante cote serveur."
    };
  }

  try {
    const subject = `Nouveau message - ${name}`;
    const html = `
      <table style="width:100%;background:#030311;padding:32px 0;font-family:'Space Grotesk',Arial,sans-serif;">
        <tr>
          <td align="center">
            <table style="max-width:560px;width:100%;margin:0 auto;border-radius:32px;background:linear-gradient(160deg,#101428,#090d1f);padding:40px 44px;border:1px solid rgba(255,255,255,0.08);color:#f5f7ff;">
              <tr>
                <td style="text-transform:uppercase;letter-spacing:6px;font-size:11px;color:rgba(255,255,255,0.6);">
                  Portfolio Thomas Lopez
                </td>
              </tr>
              <tr>
                <td style="padding-top:18px;font-size:26px;font-weight:600;color:#64ddff;">
                  ${subject}
                </td>
              </tr>
              <tr>
                <td style="padding-top:32px;">
                  <table style="width:100%;border-collapse:separate;border-spacing:0 14px;font-size:14px;">
                    <tr>
                      <td style="text-transform:uppercase;letter-spacing:3px;color:rgba(255,255,255,0.55);width:120px;">
                        Nom
                      </td>
                      <td style="color:#ffffff;font-weight:500;">${name}</td>
                    </tr>
                    <tr>
                      <td style="text-transform:uppercase;letter-spacing:3px;color:rgba(255,255,255,0.55);">
                        Email
                      </td>
                      <td style="color:#ffffff;font-weight:500;">${email}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding-top:20px;">
                  <div style="background:rgba(255,255,255,0.05);border-radius:24px;padding:24px;border:1px solid rgba(255,255,255,0.1);font-size:15px;line-height:1.7;color:#f1f3ff;">
                    ${message.replace(/\n/g, "<br/>")}
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:28px;font-size:12px;color:rgba(255,255,255,0.55);">
                  Vous pouvez repondre directement a cet email pour poursuivre la conversation.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      replyTo: [{ email, name }],
      text: [subject, "", `Nom: ${name}`, `Email: ${email}`, "", message].join("\n"),
      html
    });

    return {
      status: "success",
      message: "Merci ! Votre message est transmis a Thomas Lopez."
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
    return {
      status: "error",
      message: "Impossible d'envoyer le message pour le moment."
    };
  }
}
