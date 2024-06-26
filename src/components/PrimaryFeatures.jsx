import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Image from 'next/image'

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
     description: 'See database names, data types, indexes, and many more in intellisense - no need to switch to another view.',
     timeToRead: 8
   },
   {
     title: 'Seamless workflow',
     image: workflow,
     description: 'Make database changes, regenerate code, and immediately see the impact from the compiler.',
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
      aria-label='Features for simplifying Microsoft SQL Server'
      className='relative dark:bg-slate-900 pt-14 pb-28 sm:py-20 bg-white-100'
    >     
    <div className='swiper-container dark:swiper-container-dark px-8'>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.1}
        centeredSlides={true}
        autoplay={{
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='swiper h-full max-w-screen-2xl'
      >
        {features.map((feature) => (
            <SwiperSlide 
              key={feature.title} className='py-16 bg-white dark:bg-slate-900' 
              data-swiper-autoplay={feature.timeToRead * 1000}
            >
              <div className='text-center w-full justify-center bg-white dark:bg-transparent shadow-lg shadow-blue-900/20 rounded-lg dark:shadow-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white to-sky-50/70 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900'>
                <h2 className='pt-24 dark:pt-12 font-display text-3xl tracking-tight text-slate-900 dark:text-white md:text-4xl'><span>{feature.title}</span></h2>
                <div className='h-56 md:h-32 lg:h-36 px-8 md:px-24 lg:px-36 py-6 md:py-8 lg:py-12 text-xl text-lg text-slate-900/80 dark:text-slate-300 text-center'>{feature.description}</div>
                <div className='h-[calc(40vh-80px)] xl:h-[calc(75vh-128px)]'>
                  <Image
                    className='rounded-b-lg dark:rounded-lg object-left'
                    src={feature.image}
                    alt=''
                    priority                    
                  />
                  </div>
                </div>
            </SwiperSlide> 
          ))}
      </Swiper>
      </div>
    </section>
  )
}
