'use client'
import React from 'react'
import NavBar from '@/app/components/ui/navRedux/navbar'
import LowerBanner from '@/app/components/ui/lowerBanner/lowerbanner'
import Footer from '@/app/components/ui/footer/footer'
import { Metadata } from 'next'


export const metadata:Metadata={
  title:'Terms of Service',
  description:'The Terms of Service Page',
  creator:'Julian Borner'
}
type Props = {}

const TermsOfService = (props: Props) => {
  return (
    <main className=" mx-auto px-6 py-12 text-gray-800 bg-white ">
      <NavBar/>
      <div className=' max-w-[60vw] flex flex-col justify-self-center py-4 ' >
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="mb-4 text-sm text-gray-500">Last updated: August 5, 2025</p>

    <p className="mb-4">
      Welcome to [yourwebsite.com], operated by [Your Company Name] ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern your access to and use of our website and services ("Service").
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
    <p className="mb-4">
      By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the Service.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">2. Use of the Service</h2>
    <p className="mb-4">
      You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not misuse our Service, attempt unauthorized access, or engage in any activity that disrupts the integrity or performance of the Service.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">3. Accounts</h2>
    <p className="mb-4">
      If you create an account, you are responsible for maintaining the confidentiality of your credentials and for all activities under your account. We reserve the right to suspend or terminate your account if we suspect unauthorized use or violation of our terms.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">4. Intellectual Property</h2>
    <p className="mb-4">
      All content on the Service, including text, graphics, logos, and software, is the property of [Your Company Name] or its licensors and is protected by copyright and other intellectual property laws.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">5. Termination</h2>
    <p className="mb-4">
      We may suspend or terminate your access to the Service at any time, with or without cause or notice, including if you breach these Terms.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">6. Disclaimers</h2>
    <p className="mb-4">
      The Service is provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">7. Limitation of Liability</h2>
    <p className="mb-4">
      To the maximum extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, arising out of or related to your use of the Service.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">8. Governing Law</h2>
    <p className="mb-4">
      These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">9. Changes to These Terms</h2>
    <p className="mb-4">
      We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated date. Continued use of the Service after changes constitutes acceptance.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact</h2>
    <p className="mb-4">
      If you have any questions about these Terms, please contact us at <a href="mailto:contact@yourwebsite.com" className="text-blue-600 underline">contact@yourwebsite.com</a>.
    </p>

      </div>
    
    <LowerBanner/>
    <Footer/>
  </main>
  )
}

export default TermsOfService