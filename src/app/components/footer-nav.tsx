import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function FooterNav() {
  return (
    <div className="container py-12">
      {/* Footer container with padding */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Main Footer Sections: Infos, Legal, Account */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {/* Practical Information */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm text-gray-900">INFOS PRATIQUES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Livraisons & Reprises
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Mode d&apos;emploi

                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm text-gray-900">LÉGAL</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  CGU
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Information */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm text-gray-900">MON COMPTE</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Accéder à mon compte
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Ma liste d&apos;envie
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Créer un compte
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Mot de passe oublié
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="font-medium text-sm text-gray-900">NOUS SUIVRE</h3>
          <div className="flex items-center gap-4">
            {/* Social media icons with respective aria-labels for accessibility */}
            <Link href="#" className="text-gray-600 hover:text-gray-900" aria-label="Follow us on Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900" aria-label="Follow us on Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900" aria-label="Follow us on LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
