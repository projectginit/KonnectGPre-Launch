import { useState } from "react";

import ProjectGlogo from "../assets/ProjectGlogo.png";

import instagramIcon from "../assets/icons/instagram.png";
import facebookIcon from "../assets/icons/facebook.png";
import phoneIcon from "../assets/icons/phone.png";
import emailIcon from "../assets/icons/email.png";

export default function Footer() {
  const [activePopup, setActivePopup] = useState(null);

  const closePopup = () => setActivePopup(null);

  return (
    <footer className="w-full bg-[#6a0036] text-white px-4 sm:px-6 lg:px-10 py-6 overflow-x-hidden">

      {/* ================= TOP ROW ================= */}
      <div className="flex flex-col sm:flex-row justify-between gap-8 text-sm">

        {/* Social */}
        <div className="space-y-2">
          <p className="flex items-center gap-3">
            <img src={instagramIcon} alt="Instagram" className="h-4 w-4" />
            @hello.konnectg
          </p>

          <p className="flex items-center gap-3">
            <img src={facebookIcon} alt="Facebook" className="h-4 w-4" />
            konnectG
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h4 className="font-semibold text-base">Contact</h4>

          <p className="flex items-center gap-3">
            <img src={phoneIcon} alt="Phone" className="h-4 w-4" />
            +91 738-467-4247
          </p>

          <p className="flex items-center gap-3 break-all sm:break-normal">
            <img src={emailIcon} alt="Email" className="h-4 w-4" />
            hello@konnectg.com
          </p>
        </div>

        {/* Promise */}
        <div className="space-y-2">
          <h4 className="font-semibold text-base">Promise</h4>
          <ul className="space-y-1">
            <li>• Verified listings</li>
            <li>• Local focus</li>
            <li>• Simple search</li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM ROW ================= */}
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs opacity-90">

        {/* Legal Links */}
        <div className="flex flex-wrap gap-3 underline cursor-pointer">

          <span onClick={() => setActivePopup("disclaimer")}>
            DISCLAIMER
          </span>

          <span onClick={() => setActivePopup("privacy")}>
            PRIVACY POLICY
          </span>

          <span onClick={() => setActivePopup("terms")}>
            TERMS OF USE
          </span>

          <span onClick={() => setActivePopup("merchant")}>
            MERCHANT LISTING
          </span>
        </div>

        {/* Branding */}
        <div className="flex items-center gap-3">
          <img
            src={ProjectGlogo}
            alt="Project-G logo"
            className="h-10 sm:h-12 w-auto"
          />

          <span className="bg-teal-400 text-black px-2 py-1 rounded text-[11px] font-semibold">
            powered by PROJECT-G INITIATIVE
          </span>
        </div>
      </div>

      {/* ================= POPUP MODAL ================= */}
{activePopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

    {/* Modal Box */}
    <div
      className="
        w-full max-w-lg
        bg-white text-black
        rounded-xl shadow-lg
        relative
        max-h-[80vh]
        flex flex-col
      "
    >
      {/* Close Button */}
      <button
        onClick={closePopup}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-xl font-bold text-[#66023c] px-6 pt-6 pb-4 border-b">
        {activePopup === "disclaimer" && "Disclaimer"}
        {activePopup === "privacy" && "Privacy Policy"}
        {activePopup === "terms" && "Terms of Use"}
        {activePopup === "merchant" && "Merchant Listing"}
      </h2>

      {/* Scrollable Content Area */}
      <div className="px-6 py-4 overflow-y-auto text-sm leading-relaxed text-gray-700">

        {activePopup === "disclaimer" && (
          <p>
            KonnectG does not guarantee service quality, availability or pricing.
            We are not involved in transactions or payments.
            Any disputes must be resolved directly between the user and the service provider.
            Using the platform is at your discretion.
          </p>
        )}

        {activePopup === "privacy" && (
          <p>
            Last updated: 25th December, 2025<br /><br />

            At KonnectG, your privacy matters. We collect only what is necessary
            to connect you with trusted local businesses.<br /><br />

            <b>What information we collect</b><br />
            • Name, phone number or email when you sign up or request alerts<br />
            • Business details provided by merchants for listing and verification<br />
            • Basic usage data to improve platform performance<br /><br />

            <b>How we use your information</b><br />
            • To connect users with local businesses<br />
            • To verify listings and prevent spam or fraud<br />
            • To send important updates related to the platform<br />
            • We do NOT sell or misuse your data<br /><br />

            <b>What we do NOT do</b><br />
            • No spam calls<br />
            • No selling your phone number<br />
            • No unnecessary tracking<br /><br />

            <b>Data protection</b><br />
            We take reasonable technical measures to protect your data.<br /><br />

            <b>Third parties</b><br />
            We do not share your personal data except when legally required.
          </p>
        )}

        {activePopup === "terms" && (
          <p>
            Welcome to KonnectG.<br /><br />

            By accessing or using this platform, you agree to the following:<br /><br />

            <b>Purpose of the platform</b><br />
            KonnectG is a hyperlocal discovery platform that helps users find nearby verified services.<br /><br />

            <b>Platform role</b><br />
            • We act only as a connector<br />
            • We do not provide services directly<br />
            • Transactions are between users and businesses<br /><br />

            <b>User responsibilities</b><br />
            • Provide accurate information<br />
            • Do not misuse the platform<br />
            • Do not post misleading content<br /><br />

            KonnectG is not responsible for disputes or outcomes between users and businesses.
          </p>
        )}

        {activePopup === "merchant" && (
          <p>
            Our goal is trust and quality.<br /><br />

            <b>Eligibility</b><br />
            • Local businesses operating within listed areas<br />
            • Genuine services with valid contact details<br /><br />

            <b>Verification</b><br />
            • Listings may be verified through calls or checks<br />
            • Verification status is displayed for transparency<br /><br />

            <b>Listing rules</b><br />
            • Accurate business information is mandatory<br />
            • Fake listings are not allowed<br /><br />

            KonnectG reserves the right to remove listings that violate standards.
          </p>
        )}

      </div>
    </div>
  </div>
)}

    </footer>
  );
}
