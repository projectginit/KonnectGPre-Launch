import { useEffect, useState } from "react";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx4uZHC_gxyXce6S0jh9CsD1Dg6H8jF3IUx6poCVxo8HtoukRbPe6ul3Q2mHfascNh5/exec";

export default function BusinessCTA() {
  const [activeForm, setActiveForm] = useState(null); // "business" | "category"
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    business: "",
    businessType: "",
    phone: "",
    category: "",
  });

  useEffect(() => {
  if (window.location.hash === "#list-business-open") {
      setActiveForm("business");
    }
  }, []);

  const submitForm = async (payload) => {
    setLoading(true);
    setSuccess(false);

    try {
      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) =>
        formData.append(k, v)
      );

      const res = await fetch(SHEET_URL, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.error || "Submission failed");
      }

      setSuccess(true);
      setActiveForm(null);
      setForm({
        name: "",
        business: "",
        businessType: "",
        phone: "",
        category: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="list-business-open"
      className="w-full bg-[#f5f5dc] overflow-hidden"
    >

      {/* ✅ MARQUEE — FIXED AT TOP */}
      <div className="w-full bg-[#4b6f00] text-white">
        <div className="whitespace-nowrap animate-marquee text-sm sm:text-base lg:text-lg font-medium px-4 py-2">
          Are you a local business <span className="font-semibold">owner?</span>
          &nbsp;|&nbsp;
          Want to <span className="font-semibold">start</span> your own Business?
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-4 py-16 text-center">

        <p className="italic text-[#66023c] text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto">
          Get discovered by people near you – exactly when they need you.
        </p>

        {/* CTA Buttons */}
        {!activeForm && !success && (
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setActiveForm("business")}
              className="bg-[#4b6f00] text-white px-8 py-4 rounded-lg font-semibold"
            >
              List your Business
            </button>

            <button
              onClick={() => setActiveForm("category")}
              className="bg-[#4b6f00] text-white px-8 py-4 rounded-lg font-semibold"
            >
              Enter missing Category
            </button>
          </div>
        )}

        {/* LIST BUSINESS FORM */}
        {activeForm === "business" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm({
                name: form.name,
                business: form.business,
                businessType: form.businessType,
                phone: form.phone,
              });
            }}
            className="mt-10 max-w-md mx-auto flex flex-col gap-4"
          >
            <input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="border p-3 rounded"
            />

            <input
              placeholder="Business Name"
              value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })}
              required
              className="border p-3 rounded"
            />

            <input
              placeholder="Type of Business (e.g. Electrician, Salon)"
              value={form.businessType}
              onChange={(e) =>
                setForm({ ...form, businessType: e.target.value })
              }
              required
              className="border p-3 rounded"
            />

            <input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              inputMode="numeric"
              required
              className="border p-3 rounded"
            />

            <div className="flex gap-3">
              <button
                disabled={loading}
                className="flex-1 bg-[#4b6f00] text-white py-3 rounded"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              <button
                type="button"
                onClick={() => setActiveForm(null)}
                className="flex-1 border border-[#4b6f00] text-[#4b6f00] py-3 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* MISSING CATEGORY FORM */}
        {activeForm === "category" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm({
                category: form.category,
                phone: form.phone,
              });
            }}
            className="mt-10 max-w-md mx-auto flex flex-col gap-4"
          >
            <input
              placeholder="Missing Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
              className="border p-3 rounded"
            />

            <input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              inputMode="numeric"
              required
              className="border p-3 rounded"
            />

            <div className="flex gap-3">
              <button
                disabled={loading}
                className="flex-1 bg-[#4b6f00] text-white py-3 rounded"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              <button
                type="button"
                onClick={() => setActiveForm(null)}
                className="flex-1 border border-[#4b6f00] text-[#4b6f00] py-3 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {success && (
          <p className="mt-8 text-green-700 font-medium">
            Thanks! Your response has been recorded.
          </p>
        )}
      </div>
    </section>
  );
}
