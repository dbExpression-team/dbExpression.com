import { Container } from '@/components/Container'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { ArrowTrendingDownIcon } from '@heroicons/react/24/outline'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import { WrenchIcon } from '@heroicons/react/24/outline'
import { Cog8ToothIcon } from '@heroicons/react/24/outline'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const iconClassName = "h-12 w-12";

const features = [
  {
    id: 'Microsoft SQL Server',
    summary: 'Painless synchronization',
    description: function _() {
        return (
            <p>dbExpression keeps your <strong>code in-sync with your database schema</strong> with one simple command. Easy peasy.</p>
        )
    },
    icon: function _() {
      return (
        <ArrowPathRoundedSquareIcon className={clsx(iconClassName, 'text-violet-600 dark:text-purple-300 opacity-80')}/>
      )
    },
    textColor: 'text-violet-700 dark:text-purple-300 opacity-80'
  },
  {
    id: 'refactor',
    summary: 'Refactor with confidence',
    description: function _() {
        return (
            <p><strong>dbExpression doesn't use strings</strong> to write queries, it uses <strong>compiled and type-safe code</strong>. Refactoring is a breeze when you let the compiler do the work.</p>
          )
    },
    icon: function _() {
      return (
        <FaceSmileIcon className={clsx(iconClassName, 'text-sky-600 dark:text-sky-300 opacity-80')}/>
      )
    },
    textColor: 'text-sky-700 dark:text-sky-300 opacity-80',
  },
  {
    id: 'runtime',
    summary: 'Reduce runtime exceptions',
    description: function _() {
        return (
            <p><strong>Avoid runtime exceptions</strong> from a typo.  That's right, that gnarly string some call a SQL statement will be a thing of the past.</p>
          )
    },
    icon: function _() {
      return (
        <ArrowTrendingDownIcon className={clsx(iconClassName, 'text-pink-600 dark:text-pink-300 opacity-80')}/>
      )
    },
    textColor: 'text-pink-700 dark:text-pink-300 opacity-80',
  },  
  {
    id: 'teams',
    summary: 'Easy for teams',
    description: function _() {
        return (
            <p>With an <strong>easy-to-follow development workflow</strong>, your team is free to focus on the fun stuff.</p>
          )
    },
    icon: function _() {
      return (
        <UserGroupIcon className={clsx(iconClassName, 'text-sky-600 dark:text-sky-300 opacity-80')}/>
      )
    },
    textColor: 'text-sky-700 dark:text-sky-300 opacity-80',
  },
  {
    id: 'source control',
    summary: 'Source control just got better',
    description: function _() {
        return (
            <p>dbExpression ensures a clear view of <strong>database changes in source control</strong>, showing precisely what changed and when.</p>
        )
    },
    icon: function _() {
      return (
        <CodeBracketIcon className={clsx(iconClassName, 'text-pink-600 dark:text-pink-300 opacity-80')}/>
      )
    },
    textColor: 'text-pink-700 dark:text-pink-300 opacity-80',
  },
  {
    id: 'work',
    summary: 'It just works',
    description: function _() {
        return (
            <p>dbExpression manages an <strong>intuitive API of your database</strong>, backed by a solid framework.  You get to work on other things and <strong>not worry about your .NET ORM</strong>.</p>
        )
    },
    icon: function _() {
        return (
            <Cog6ToothIcon className={clsx(iconClassName, 'text-violet-600 dark:text-purple-300 opacity-80')}/>
          )
    },
    textColor: 'text-violet-700 dark:text-purple-300 opacity-80',
  }
]

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-label="Benefits to using dbExpression"
      className="pt-20 sm:pt-32 bg-white dark:bg-slate-900"
    >
      <Container>
        <div className="grid grid-rows-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 mx-8 md:mx-16 xl:mx-24 pb-24">
        {features.map((feature, idx) => (
            <div key={feature.id} className={clsx(idx % 2 == 0 ? 'bg-gradient-to-br' : 'bg-gradient-to-tl', idx > 2 ? 'xl:bg-gradient-to-tr' : 'xl:bg-gradient-to-bl', 'rounded-2xl shadow-lg shadow-blue-900/20 from-emerald-200/80 via-pink-400/80 to-sky-400/80 dark:from-emerald-100 dark:via-pink-300 dark:to-sky-400 flex flex-col gap-y-6')}>
               <div className='rounded-2xl bg-white dark:bg-blue-900 opacity-15 m-0.5 h-full'>
                  <div className='p-16'>
                    <div className="flex justify-center">
                      <div className="w-12 h-12">
                          <feature.icon />
                      </div>
                    </div>
                    <h2 className="py-6 lg:pt-12 font-display text-2xl text-sky-900 text-center">
                      <span className={clsx('inline-block align-text-top', feature.textColor)}>{feature.summary}</span>
                    </h2>
                    <div className="md:pt-6 lg:pt-12 text-base text-lg text-slate-600 dark:text-slate-300 text-center">
                      <feature.description />
                    </div>
                  </div>
                </div>
            </div>
          ))
          }
        </div>
      </Container>
    </section>
  )
}
