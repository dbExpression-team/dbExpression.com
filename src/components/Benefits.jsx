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

const iconClassName = "h-12 w-12 text-sky-900";

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
        <ArrowPathRoundedSquareIcon className={iconClassName}/>
      )
    },
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
        <FaceSmileIcon className={iconClassName}/>
      )
    },
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
        <ArrowTrendingDownIcon className={iconClassName}/>
      )
    },
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
        <UserGroupIcon className={iconClassName}/>
      )
    },
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
        <CodeBracketIcon className={iconClassName}/>
      )
    },
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
            <Cog6ToothIcon className={iconClassName}/>
          )
    },
  }
]

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-label="Benefits to using dbExpression"
      className="pt-20 sm:pt-32"
    >
      <Container>
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-x-24 mx-8 md:mx-16 lg:mx-24">
        {features.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-y-6 pb-14 sm:pb-20 lg:pb-32">
                <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-lg">
                        <feature.icon />
                    </div>
                </div>
                <h3 className="lg:pt-8 font-display text-lg lg:text-2xl text-sky-900 text-center">
                    <span className="inline-block align-text-top">{feature.summary}</span>
                </h3>
                <div className="lg:pt-8 text-base lg:text-lg text-slate-600 text-center">
                    <feature.description />
                </div>
            </div>
          ))
          }
        </div>
      </Container>
    </section>
  )
}
