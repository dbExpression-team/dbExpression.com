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

const features = [
  {
    id: 'Microsoft SQL Server',
    summary: 'Painless synchronization',
    description: function _() {
        return (
            <p>dbExpression keeps your <strong>code in-sync database schema</strong> so you don't have to.</p>
        )
    },
    icon: function _() {
      return (
        <ArrowPathRoundedSquareIcon className="h-12 w-12 text-blue-600"/>
      )
    },
  },
  {
    id: 'runtime',
    summary: 'Reduce runtime exceptions',
    description: function _() {
        return (
            <p>Since dbExpression keeps your database changes in sync with your code, runtime exceptions are greatly reduced. </p>
          )
    },
    icon: function _() {
      return (
        <ArrowTrendingDownIcon className="h-12 w-12 text-blue-600"/>
      )
    },
  },
  {
    id: 'refactor',
    summary: 'Refactor with confidence',
    description: function _() {
        return (
          <>
            <p><strong>No "magic strings"</strong> to compose queries which can lead to runtime exceptions from changes to database schema.  Queries are <strong>strongly-typed and compiled in code</strong>, schema changes will be caught by the compiler.</p>
            </>
          )
    },
    icon: function _() {
      return (
        <FaceSmileIcon className="h-12 w-12 text-blue-600"/>
      )
    },
  },
  {
    id: 'NuGet',
    summary: 'Work on the important stuff',
    description: function _() {
        return (
            <p>We manage an <strong>intuitive API</strong> that allows you to easily query your database.</p>
        )
    },
    icon: function _() {
        return (
            <Cog6ToothIcon className="h-12 w-12 text-blue-600"/>
          )
    },
  },  
  {
    id: 'queries',
    summary: '?',
    description: function _() {
        return (
            <p>It's easier to author queries. </p>
          )
    },
    icon: function _() {
      return (
        <PencilSquareIcon className="h-12 w-12 text-blue-600"/>
      )
    },
  },
  {
    id: 'Microsoft SQL Server',
    summary: 'XXX',
    description: function _() {
        return (
            <p>Source control will provide a clear history, showing when database changes were introduced into your code base.</p>
        )
    },
    icon: function _() {
      return (
        <CodeBracketIcon className="h-12 w-12 text-blue-600"/>
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
                <h3 className="lg:pt-8 font-display text-xl lg:text-2xl text-slate-900 text-center">
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
