import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { WrenchIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Example() {
  return (
    <div id="content">
    <div data-aos="fade-up">
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-blue-800">"What our customers think..."</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Gear You Can Trust
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
              "Built to perform when it matters most. Precision-crafted firearms, trusted by hunters, defenders, and enthusiasts alike."
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
    src="/images/cartel.jpg"
    alt=""
    className="w-70 rounded-xl shadow-lg translate-x-50"
  />
  <img
    src="/images/soeharto.jpg"
    alt=""
    className="w-40 rounded-xl shadow-lg translate-x-20 translate-y-15"
  />
  <img
    src="/images/Turkish.jpg"
    alt=""
    className="w-40 rounded-xl shadow-lg translate-x-70"
  />
  </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
              "Join thousands of satisfied customers who trust us for their hunting trips, home protection, and competitive shooting needs. When every shot counts, you can count on Pew Pew Armory."
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <WrenchIcon aria-hidden="true" className="mt-1 size-5 flex-none text-black" />
                  <span>
                    <strong className="font-semibold text-gray-900">Top-tier Craftsmanship :</strong><br></br> 
                    Every weapon is hand-inspected and tested to meet the highest standards of durability and precision.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-black" />
                  <span>
                    <strong className="font-semibold text-gray-900">Safety Standards:</strong> Our firearms and accessories meet the most stringent safety standards, offering unmatched reliability in every shot.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MagnifyingGlassIcon aria-hidden="true" className="mt-1 size-5 flex-none text-black" />
                  <span>
                    <strong className="font-semibold text-gray-900">Precision Engineering:</strong><br></br>
                    Our firearms are crafted with an eye for detail, ensuring every component is perfectly engineered for accuracy and reliability.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Performance You Can Rely On:
              Whether you're out in the field hunting, at the range training, or protecting your home, our weapons are designed to deliver the performance you need when it matters most.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Not Sure What You Need?</h2>
              <p className="mt-6">
              Don't worry, we've got options for every shooter. Whether you're looking for precision, power, or versatility, Pew Pew Armory has the right gear for you. Let us help you find the perfect match for your needs. Ready to take the shot?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
  )
}