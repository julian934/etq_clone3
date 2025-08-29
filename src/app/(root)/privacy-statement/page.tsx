'use client'
import React from 'react'
import NavBar from '@/app/components/ui/navRedux/navbar'
import LowerBanner from '@/app/components/ui/lowerBanner/lowerbanner'
import Footer from '@/app/components/ui/footer/footer'
import { Metadata } from 'next'


export const metadata:Metadata={
  title:'Privacy Statement',
  description:'The Privacy Statement Page',
  creator:'Julian Borner'
}
type Props = {}

const Privacy = (props: Props) => {
  return (
    <main className="bg-white mx-auto px-6 py-12 text-gray-800">
      <NavBar/>
      <div className='max-w-[60vw] flex flex-col justify-self-center py-4' >
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4 text-sm text-gray-500">Last updated: August 5, 2025</p>

    <p className="mb-4">
      [Your Company Name] ("we", "us", or "our") operates the website [yourwebsite.com] (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
    <p className="mb-4">
      We collect several types of information for various purposes to provide and improve our Service:
    </p>
    <ul className="list-disc ml-6 mb-4">
      <li>Personal Data (name, email, etc.) you provide directly</li>
      <li>Usage Data (IP address, browser type, pages visited, etc.)</li>
      <li>Cookies and tracking technologies</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
    <p className="mb-4">
      We use the collected data to:
    </p>
    <ul className="list-disc ml-6 mb-4">
      <li>Provide and maintain our Service</li>
      <li>Notify you about changes to our Service</li>
      <li>Respond to your requests or inquiries</li>
      <li>Monitor usage and improve our Service</li>
      <li>Detect and prevent fraud or abuse</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">3. Cookies</h2>
    <p className="mb-4">
      We use cookies to track activity and store preferences. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. If you disable cookies, some parts of the Service may not function properly.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">4. Data Sharing</h2>
    <p className="mb-4">
      We do not sell or rent your personal information. We may share data:
    </p>
    <ul className="list-disc ml-6 mb-4">
      <li>With service providers (e.g., hosting, analytics)</li>
      <li>To comply with legal obligations</li>
      <li>To protect and defend our legal rights</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Security</h2>
    <p className="mb-4">
      We implement appropriate technical and organizational measures to protect your data. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
    <p className="mb-4">
      You have the right to:
    </p>
    <ul className="list-disc ml-6 mb-4">
      <li>Access, update, or delete your personal data</li>
      <li>Withdraw consent where processing is based on consent</li>
      <li>Lodge a complaint with a data protection authority</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">7. Links to Other Sites</h2>
    <p className="mb-4">
      Our Service may contain links to external sites that are not operated by us. We strongly advise you to review the privacy policy of every site you visit.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">8. Children's Privacy</h2>
    <p className="mb-4">
      Our Service is not intended for children under the age of 13, and we do not knowingly collect personal data from them. If you are a parent or guardian and believe your child has provided us with data, please contact us.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
    <p className="mb-4">
      We may update this Privacy Policy from time to time. We will notify you of changes by posting the new policy on this page with an updated "Last updated" date.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact Us</h2>
    <p className="mb-4">
      If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@yourwebsite.com" className="text-blue-600 underline">contact@yourwebsite.com</a>.
    </p>
      </div>
    
    <LowerBanner/>
    <Footer/>
  </main>
  )
}

export default Privacy