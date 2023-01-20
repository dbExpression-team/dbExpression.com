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
        <ArrowPathRoundedSquareIcon className={clsx(iconClassName, 'text-purple-600/80 dark:text-purple-400/95')}/>
      )
    },
    textColor: 'text-purple-600/80 dark:text-purple-400/95'
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
        <FaceSmileIcon className={clsx(iconClassName, 'text-sky-600/70 dark:text-sky-400/80')}/>
      )
    },
    textColor: 'text-sky-600/70 dark:text-sky-400/80',
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
        <ArrowTrendingDownIcon className={clsx(iconClassName, 'text-pink-500/80 dark:text-fuchsia-500/80')}/>
      )
    },
    textColor: 'text-pink-500/80 dark:text-fuchsia-500/80',
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
        <UserGroupIcon className={clsx(iconClassName, 'text-sky-600/70 dark:text-sky-400/80')}/>
      )
    },
    textColor: 'text-sky-600/70 dark:text-sky-400/80',
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
        <CodeBracketIcon className={clsx(iconClassName, 'text-pink-500/80 dark:text-fuchsia-500/80')}/>
      )
    },
    textColor: 'text-pink-500/80 dark:text-fuchsia-500/80',
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
            <Cog6ToothIcon className={clsx(iconClassName, 'text-purple-600/80 dark:text-purple-400/95')}/>
          )
    },
    textColor: 'text-purple-700/80 dark:text-purple-400/95',
  }
]

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-label="Benefits from using dbExpression"
      className="pt-20 sm:pt-32 bg-white dark:bg-slate-900"
    >
      <Container className='flex flex-col items-center'>
        <div className="grid grid-rows-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 mx-8 md:mx-16 xl:mx-24 pb-24 max-w-screen-2xl">
        {features.map((feature, idx) => (
            <div key={feature.id} className='relative'>
              <div className={clsx('absolute rounded-2xl inset-0 dark:-inset-0.5 blur-sm dark:blur bg-gradient-to-l from-violet-400/80 via-pink-400/80 to-indigo-400/80 dark:from-fuchsia-800 dark:via-pink-800 dark:to-sky-700', idx % 2 == 0 ? 'lg:bg-gradient-to-r' : 'lg:bg-gradient-to-l')}></div>
              <div className={clsx('relative rounded-2xl inset-0 bg-white dark:bg-blue-900 h-full')}>                
                  <div className='p-8'>
                    <div className="flex justify-center">
                      <div className="w-12 h-12">
                          <feature.icon />
                      </div>
                    </div>
                    <h2 className="py-8 lg:pt-12 font-display text-2xl text-center lg:h-24">
                      <span className={clsx('inline-block align-text-top', feature.textColor)}>{feature.summary}</span>
                    </h2>
                    <div className="pt-12 lg:pt-24 text-base text-lg text-slate-800/80 dark:text-slate-300 text-center">
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
