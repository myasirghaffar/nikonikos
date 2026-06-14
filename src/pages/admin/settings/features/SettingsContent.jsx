import {
  BriefcaseBusiness,
  Facebook,
  Globe2,
  Linkedin,
  Mail,
  MessageCircle,
  Save,
  Send,
  Share2,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import {
  getSettings,
  saveSettings,
} from "../../../../lib/adminCommerceStore";

const fieldClass =
  "h-[52px] w-full rounded-xl border border-zinc-800 bg-white/5 px-4 text-base text-white outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-rose-700";

const SettingsContent = () => {
  const [settings, setSettings] = useState(getSettings);
  const [saved, setSaved] = useState(false);

  const update = (field, value) =>
    setSettings((previous) => ({ ...previous, [field]: value }));

  const updateNotification = (field) =>
    setSettings((previous) => ({
      ...previous,
      notifications: {
        ...previous.notifications,
        [field]: !previous.notifications[field],
      },
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    saveSettings(settings);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">System Settings</h1>
          <p className="mt-3 text-base text-gray-400">
            Configure your website general information and integration services.
          </p>
        </div>
        <button className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-rose-700 px-8 text-lg font-bold text-white shadow-[0_0_24px_rgba(200,16,46,0.25)]">
          <Save className="h-5 w-5" />
          {saved ? "Saved" : "Save Changes"}
        </button>
      </header>

      <div className="grid gap-9 xl:grid-cols-2">
        <SettingsCard icon={Globe2} title="General Settings" iconTone="bg-rose-700/15 text-rose-700">
          <div className="space-y-6">
            <Field label="Website Name">
              <input className={fieldClass} value={settings.websiteName} onChange={(event) => update("websiteName", event.target.value)} />
            </Field>
            <div className="grid gap-5 md:grid-cols-2">
              <UploadField label="Logo (Light)" badge="Logo" />
              <UploadField label="Favicon" badge="Fav" />
            </div>
            <Field label="Contact Email">
              <input className={fieldClass} value={settings.email} onChange={(event) => update("email", event.target.value)} />
            </Field>
            <Field label="Phone Number">
              <input className={fieldClass} value={settings.phone} onChange={(event) => update("phone", event.target.value)} />
            </Field>
            <Field label="Physical Address">
              <textarea className={`${fieldClass} min-h-24 py-4`} value={settings.address} onChange={(event) => update("address", event.target.value)} />
            </Field>
          </div>
        </SettingsCard>

        <SettingsCard icon={Globe2} title="Google Services" iconTone="bg-emerald-400/15 text-emerald-400">
          <div className="space-y-6">
            <Field label="Google Maps API Key" note="Required for locator">
              <input className={fieldClass} value={settings.mapsKey} onChange={(event) => update("mapsKey", event.target.value)} />
            </Field>
            <Field label="Google Analytics (G-ID)">
              <input className={fieldClass} value={settings.analyticsId} onChange={(event) => update("analyticsId", event.target.value)} />
            </Field>
            <Field label="Google Tag Manager (GTM-ID)">
              <input className={fieldClass} value={settings.tagManagerId} onChange={(event) => update("tagManagerId", event.target.value)} />
            </Field>

            <div className="border-t border-zinc-800 pt-6">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Share2 className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-white">Social Media</h2>
              </div>
              <div className="space-y-4">
                <IconInput icon={Facebook} placeholder="Facebook URL" value={settings.facebook} onChange={(value) => update("facebook", value)} />
                <IconInput icon={Instagram} placeholder="Instagram URL" value={settings.instagram} onChange={(value) => update("instagram", value)} />
                <IconInput icon={Linkedin} placeholder="LinkedIn URL" value={settings.linkedin} onChange={(value) => update("linkedin", value)} />
                <IconInput icon={MessageCircle} placeholder="WhatsApp Number/Link" value={settings.whatsapp} onChange={(value) => update("whatsapp", value)} />
              </div>
            </div>
          </div>
        </SettingsCard>
      </div>

      <SettingsCard icon={BriefcaseBusiness} title="Email Configuration & Notifications" iconTone="bg-amber-500/15 text-amber-400">
        <div className="grid gap-9 xl:grid-cols-[1fr_320px]">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="SMTP Host">
              <input className={fieldClass} value={settings.smtpHost} onChange={(event) => update("smtpHost", event.target.value)} />
            </Field>
            <Field label="SMTP Port">
              <input className={fieldClass} value={settings.smtpPort} onChange={(event) => update("smtpPort", event.target.value)} />
            </Field>
            <Field label="SMTP Username">
              <input className={fieldClass} value={settings.smtpUsername} onChange={(event) => update("smtpUsername", event.target.value)} />
            </Field>
            <Field label="SMTP Password">
              <input type="password" className={fieldClass} value={settings.smtpPassword} onChange={(event) => update("smtpPassword", event.target.value)} />
            </Field>
            <button
              type="button"
              className="inline-flex h-12 w-fit items-center gap-3 rounded-xl border border-zinc-800 bg-white/5 px-6 text-sm text-white"
            >
              <Send className="h-4 w-4 text-gray-400" />
              Test SMTP Connection
            </button>
          </div>

          <div className="border-t border-zinc-800 pt-6 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
            <h3 className="mb-7 text-lg font-bold text-white">Notification Rules</h3>
            <div className="space-y-5">
              <Toggle label="New Order Alerts" checked={settings.notifications.newOrders} onClick={() => updateNotification("newOrders")} />
              <Toggle label="Low Stock Alerts" checked={settings.notifications.lowStock} onClick={() => updateNotification("lowStock")} />
              <Toggle label="New User Registration" checked={settings.notifications.userRegistration} onClick={() => updateNotification("userRegistration")} />
              <Toggle label="System Updates" checked={settings.notifications.systemUpdates} onClick={() => updateNotification("systemUpdates")} />
            </div>
          </div>
        </div>
      </SettingsCard>
    </form>
  );
};

const SettingsCard = ({ icon: Icon, title, iconTone, children }) => (
  <section className="rounded-2xl border border-zinc-800 bg-stone-900/70 p-7">
    <div className="flex items-center gap-4">
      <div className={`flex size-12 items-center justify-center rounded-xl ${iconTone}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <div className="my-7 h-px bg-zinc-800" />
    {children}
  </section>
);

const Field = ({ label, note, children }) => (
  <label className="block">
    <span className="mb-3 flex items-center justify-between gap-4 text-sm font-semibold text-gray-400">
      {label}
      {note ? (
        <span className="rounded border border-zinc-800 px-2 py-0.5 text-[10px] uppercase text-gray-400">
          {note}
        </span>
      ) : null}
    </span>
    {children}
  </label>
);

const UploadField = ({ label, badge }) => (
  <div>
    <p className="mb-3 text-sm font-semibold text-gray-400">{label}</p>
    <div className="flex h-16 items-center gap-4 rounded-xl border border-dashed border-zinc-800 px-3">
      <span className="flex size-12 items-center justify-center rounded-lg bg-black/50 text-xs text-gray-500">
        {badge}
      </span>
      <span className="text-sm font-medium text-rose-700">Change</span>
    </div>
  </div>
);

const IconInput = ({ icon: Icon, placeholder, value, onChange }) => (
  <label className="relative block">
    <Icon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
    <input
      className={`${fieldClass} pl-12`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
    />
  </label>
);

const Toggle = ({ label, checked, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full items-center justify-between gap-5 text-left text-sm text-gray-400"
  >
    {label}
    <span className={`relative h-6 w-11 rounded-full ${checked ? "bg-rose-700" : "bg-white/10"}`}>
      <span className={`absolute top-1 size-4 rounded-full bg-white transition ${checked ? "left-6" : "left-1"}`} />
    </span>
  </button>
);

export default SettingsContent;
