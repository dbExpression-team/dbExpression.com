import Image from 'next/future/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import fluentSqlStatement from '@/images/screenshots/fluent-sql-statements.gif'
import intellisenseWithDatabaseAttributes from '@/images/screenshots/intellisense-with-database-attributes.png'
import extensible from '@/images/screenshots/extensible-and-configurable.png'
import workflow from '@/images/screenshots/workflow.gif'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const features = [
  {
    title: 'Fluent SQL',
    image: fluentSqlStatement,
    description: 'Author strongly-typed SQL queries in code using a guided and fluent syntax.',
    timeToRead: 12
  },
  {
     title: 'Intellisense',
     image: intellisenseWithDatabaseAttributes,
     description: 'See column names, column data types, table indexes, and many more in intellisense - no need to switch to another view.',
     timeToRead: 8
   },
   {
     title: 'Seamless workflow',
     image: workflow,
     description: 'Make database changes, regenerate code using the dbExpression dotnet tool, and immediately see the impact from the compiler.',
     timeToRead: 12
   },
   {
     title: 'Extensible',
     image: extensible,
     description: 'Extensible by design, configurable to your needs.',
     timeToRead: 8
   },
]

export function PrimaryFeatures() {
  return (
    <section
      id='features'
      aria-label='dbExpression Features'
      className='relative dark:bg-slate-900 pt-14 pb-28 sm:py-20 bg-white-100'
    >     
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,          
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className='swiper h-full w-full'
      >
        {features.map((feature) => (
            <SwiperSlide 
              key={feature.title} className='py-16 bg-white dark:bg-slate-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-sky-50 dark:from-sky-500 dark:via-sky-900 dark:to-slate-900' 
              data-swiper-autoplay={feature.timeToRead * 1000}
            >
              <div className='text-center bg-white dark:bg-transparent shadow-lg shadow-blue-900/20 rounded-lg dark:shadow-none'>
                <h2 className='pt-12 font-display text-3xl tracking-tight text-slate-700 dark:text-white md:text-4xl'><span>{feature.title}</span></h2>
                <div className='py-6 lg:py-12 text-xl text-lg text-slate-600 dark:text-slate-300 text-center'><span>{feature.description}</span></div>
                <div className='h-[calc(40vh-80px)] xl:h-[calc(75vh-128px)] w-full'>
                  <Image
                    className='rounded-b-lg dark:rounded-lg block object-cover'
                    src={feature.image}
                    alt=''
                    priority                    
                  />
                  </div>
                </div>
            </SwiperSlide> 
          ))}
      </Swiper>
    </section>
  )
}
