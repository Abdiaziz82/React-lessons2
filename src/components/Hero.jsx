
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/react.svg'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
   { name: 'Service', href: '#' },
   { name: 'Contact', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white font">


    <div class="px-4 sm:px-10 py-18">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
          <div>
            <div class="max-w-3xl max-lg:mx-auto max-lg:text-center">
              <h1 class="text-slate-900 md:text-5xl text-4xl font-bold !leading-tight">Simple <span class="text-indigo-600">Solutions</span> for Complex Problems</h1>
              <p class="text-slate-600 text-base leading-relaxed mt-6">Showcase your products and connect with your audience. Our all-in-one platform helps you manage operations and boost visibility — whether you're in fashion, beauty, wellness, or beyond.</p>

              <div class="mt-8 flex flex-wrap gap-6 max-lg:justify-center">
                <button type='button'
                  class="bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-full px-6 py-3 cursor-pointer outline-0">Get Started Free</button>
                <button type='button'
                  class="bg-transparent hover:bg-gray-50 border border-indigo-700 transition-all text-base text-slate-900 font-medium rounded-full px-6 py-3 cursor-pointer outline-0">Explore Features</button>
              </div>
            </div>

            <div class="mt-12">
              <div class="grid sm:grid-cols-3 gap-x-4 gap-y-6 max-lg:text-center">
                <div class="flex flex-col">
                  <h5 class="text-indigo-700 font-semibold text-2xl mb-2">10+</h5>
                  <p class="text-base text-slate-600 font-medium">Years Experience</p>
                </div>
                <div class="flex flex-col">
                  <h5 class="text-indigo-700 font-semibold text-2xl mb-2">890</h5>
                  <p class="text-base text-slate-600 font-medium">Cases Solved</p>
                </div>
                <div class="flex flex-col">
                  <h5 class="text-indigo-700 font-semibold text-2xl mb-2">250</h5>
                  <p class="text-base text-slate-600 font-medium">Business Partners</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src="https://readymadeui.com/images/kpi-img-3.webp" alt="kpi-img"
              class="w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}