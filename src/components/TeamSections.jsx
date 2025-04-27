const people = [
    {
      name: 'Pablo Escobar',
      role: 'Gun Supplier',
      imageUrl:
        '/images/pablo.jpg',
    },
    {
        name: 'P. Diddy',
        role: 'Investor',
        imageUrl:'images/pdiddy.jpg'
    },
    {
        name: 'Tung Tung Sahur',
        role: 'Weapons Manager',
        imageUrl: '/images/tungtung.jpg'
    },
    {
        name: 'My Fish',
        role: 'Weapons Logistic',
        imageUrl: '/images/fishy.jpg'
    }
    // More people...
  ]
  
  export default function Example() {
    return (
        <div data-aos="fade-up">
        <div id="Teams">
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
              Meet our partners
            </h2>
            <p className="mt-6 text-lg/8 text-white">
            "We’re a team of trusted firearm specialists, committed to providing the finest firearms, accessories, and services to hunters, defenders, and enthusiasts alike. Your safety and performance are our top priorities."
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-blue-400">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      </div>
    )
  }
