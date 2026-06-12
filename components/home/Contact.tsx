import { Phone,  MapPin, Clock, Mail } from "lucide-react";
import {FaFacebook as Facebook, FaInstagram as Instagram, FaWhatsapp  as Whatsapp} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Contact Us
        </h2>

        <p className="mt-4 text-center text-gray-500">
          We would love to hear from you.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* WhatsApp */}

          <a
            href="https://wa.me/94710337335"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-50"
          >

            <Whatsapp
              size={36}
              className="text-green-600"
            />

            <h3 className="mt-4 text-xl font-semibold">

              WhatsApp

            </h3>

            <p className="mt-2 text-gray-600">

              +94 71 033 7335

            </p>

          </a>

          {/* Phone */}

          <a
            href="tel:+94776519822"
            className="rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
          >

            <Phone
              size={36}
              className="text-gray-900"
            />

            <h3 className="mt-4 text-xl font-semibold">

              Call Us

            </h3>

            <p className="mt-2 text-gray-600">

              +94 77 651 9822

            </p>

          </a>

          {/* Location */}

          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <MapPin
              size={36}
              className="text-red-500"
            />

            <h3 className="mt-4 text-xl font-semibold">

              Location

            </h3>

            <p className="mt-2 text-gray-600">

              Horana, Sri Lanka

            </p>

          </div>

          {/* Email */}

          <a
            href="mailto:trendauraceylon@gmail.com"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:bg-gray-100"
          >

            <Mail
              size={36}
              className="text-blue-500"
            />

            <h3 className="mt-4 text-xl font-semibold">

              Email

            </h3>

            <p className="mt-2 text-gray-600 break-all">

              trendauraceylon@gmail.com

            </p>

          </a>

          {/* Instagram */}

          <a
            href="https://www.instagram.com/trendaura_ceylon_?igsh=MXRnaXV4aGlmcXNiaw=="
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:bg-pink-50"
          >

            <Instagram
              size={36}
              className="text-pink-600"
            />

            <h3 className="mt-4 text-xl font-semibold">

              Instagram

            </h3>

            <p className="mt-2 text-gray-600">

              @trendaura_ceylon

            </p>

          </a>

          {/* Facebook */}

          <a
            href="https://www.facebook.com/share/1ASkATGUUN/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:bg-blue-50"
          >

            <Facebook
              size={36}
              className="text-blue-600"
            />

            <h3 className="mt-4 text-xl font-semibold">

              Facebook

            </h3>

            <p className="mt-2 text-gray-600">

              Trendaura

            </p>

          </a>

        </div>

        {/* Business Hours */}

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3">

            <Clock className="text-yellow-500" />

            <h3 className="text-2xl font-semibold">

              Business Hours

            </h3>

          </div>

          <div className="mt-6 space-y-3 text-gray-600">

            <div className="flex justify-between">

              <span>Monday - Saturday</span>

              <span>9:00 AM - 6:00 PM</span>

            </div>

            <div className="flex justify-between">

              <span>Sunday</span>

              <span>10:00 AM - 5:00 PM</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}