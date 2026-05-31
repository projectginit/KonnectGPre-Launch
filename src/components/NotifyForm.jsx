import { useState } from "react";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxFpbSo1DcG7OnMPzxBhYuDboZpE727OruUUa3vxOqHRdOlfUxh22EW0neQ5LnGimsxJA/exec";

export default function NotifyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);

      const res = await fetch(SHEET_URL, {
        method: "POST",
        body: formDataToSend,
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "" });
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#f5f5dc] px-4 sm:px-6 lg:px-8 mt-8 mb-8">
      <p className="text-center p-4 mt-6 text-[#66023c] text-lg">
        We’re verifying businesses and preparing the platform for you.
      </p>

      <div className="mx-auto w-full max-w-md text-center">

        {/* INITIAL BUTTON */}
        {!showForm && !success && (
          <button
            onClick={() => setShowForm(true)}
            className="
              mt-4 w-full
              rounded-md bg-[#3b6302]
              px-6 py-4
              text-white font-semibold
              hover:opacity-90 transition
            "
          >
            Notify Me When You Launch
          </button>
        )}

        {/* FORM */}
        {showForm && !success && (
        <form
    onSubmit={handleSubmit}
    className="
      mt-4 flex flex-col gap-4
      animate-fadeIn
    "
  >
    <input
      type="text"
      name="name"
      placeholder="Your name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full rounded-md border px-4 py-3"
    />

    <input
      type="email"
      name="email"
      placeholder="Email (optional)"
      value={formData.email}
      onChange={handleChange}
      className="w-full rounded-md border px-4 py-3"
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone (optional)"
      value={formData.phone}
      onChange={handleChange}
      inputMode="numeric"
      className="w-full rounded-md border px-4 py-3"
    />

    {/* ACTION BUTTONS */}
    <div className="flex gap-3 mt-2">
      <button
        type="submit"
        disabled={loading}
        className="
          flex-1 rounded-md
          bg-[#3b6302]
          px-6 py-4
          text-white font-semibold
          disabled:opacity-60
        "
      >
        {loading ? "Submitting..." : "Notify Me"}
      </button>

      <button
        type="button"
        onClick={() => setShowForm(false)}
        className="
          flex-1 rounded-md
          border border-[#3b6302]
          px-6 py-4
          font-semibold
          text-[#3b6302]
          hover:bg-[#3b6302]/10
          transition
        "
      >
        Cancel
      </button>
    </div>
  </form>
)}


        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="mt-4 text-green-700 text-sm">
            Thanks! We’ll notify you soon.
          </p>
        )}

      </div>
    </section>
  );
}
