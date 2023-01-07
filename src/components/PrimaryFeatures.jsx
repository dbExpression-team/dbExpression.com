import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import fluentSqlStatement from '@/images/screenshots/fluent-sql-statements.gif'
import intellisenseWithDatabaseAttributes from '@/images/screenshots/intellisense-with-database-attributes.png'
import extensible from '@/images/screenshots/extensible-and-configurable.png'
import workflow from '@/images/screenshots/workflow.gif'
import backgroundImage from '@/images/features.jpg'

const features = [
  {
    title: 'Fluent SQL',
    image: fluentSqlStatement,
    description:
      "Author strongly-typed SQL queries in code using a guided and fluent syntax.",
  },
  {
    title: 'Intellisense',
    image: intellisenseWithDatabaseAttributes,
    description:
      "See column names, column data types, table indexes, and many more in intellisense - no need to switch to another view."
  },
  {
    title: 'Seamless workflow',
    image: workflow,
    description:
      'Make database changes, regenerate code using the dbExpression dotnet tool, and immediately see the impact from the compiler.'
  },
  {
    title: 'Extensible',
    image: extensible,
    description:
      "Extensible by design, configurable to your needs."
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="dbExpression Features"
      className="relative overflow-hidden dark:bg-slate-900 pt-14 pb-28 sm:py-20 bg-white-100"
    >
      
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-slate-700 dark:text-white md:text-4xl">
            Compiled SQL. Finally.
          </h2>
        </div>
        
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0 min-h-fit"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative flex grow gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  <div className='first:pt-8 last:pb-8'>
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full my-6 px-4 lg:rounded-r-none lg:rounded-l-xl lg:-mt-4 lg:p-8 lg:pl-12',
                        selectedIndex === featureIndex
                          ? 'bg-sky-100 lg:bg-sky-50 dark:bg-blue-900 dark:lg:bg-blue-800 lg:ring-2 lg:ring-inset lg:ring-white/20'
                          : 'hover:bg-white/10 lg:hover:bg-white/5 dark:lg:hover:bg-blue-800'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display lg:text-2xl [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-sky-800 dark:lg:text-white'
                              : 'text-sky-500 hover:text-sky-800 lg:text-slate-500 dark:text-sky-500 dark:hover:text-white dark:lg:text-slate-200'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl font-display" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-sky-800 dark:text-white'
                            : 'text-sky-500 group-hover:text-sky-800 dark:group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                  </div>
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem] opacity-95">
                      <Image
                          className="w-full"
                          src={feature.image}
                          alt=""
                          priority
                          sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                        />
                    </div>                    
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
