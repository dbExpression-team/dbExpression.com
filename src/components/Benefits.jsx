import { Container } from '@/components/Container'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { ArrowTrendingDownIcon } from '@heroicons/react/24/outline'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    id: 'Microsoft SQL Server',
    summary: 'Increase team productivity',
    description: function RuntimeDescription() {
        return (
            <p><strong>Reduce time spent</strong> round-tripping changes to the database and ensure your <strong>application code is always in sync</strong> with database schema.</p>
        )
    },
    icon: function Team() {
      return (
        <UserGroupIcon className="h-12 w-12 text-blue-600"/>
      )
    },
  },
  {
    id: 'runtime',
    summary: 'Reduce runtime exceptions',
    description: function RuntimeDescription() {
        return (
            <p><strong>No "magic strings"</strong> to compose queries which cause runtime exceptions when changes are made to database schema.  Queries are <strong>strongly-typed and compiled in code</strong>, any changes will be caught by the compiler.</p>
        )
    },
    icon: function RuntimeIcon() {
      return (
        <ArrowTrendingDownIcon className="h-12 w-12 text-blue-600"/>
      )
    },
  },
  {
    id: 'NuGet',
    summary: 'Work on the important stuff',
    description: function RuntimeDescription() {
        return (
            <p>You're expected to deliver timely results.  With an <strong>API of your database directly in code</strong>, you don't have to worry about lost time tearing into an obtuse framework to figure out how to make it run a simple query.</p>
        )
    },
    icon: function NuGetIcon() {
        return (
            <ClipboardDocumentCheckIcon className="h-12 w-12 text-blue-600"/>
          )
    },
  },
]

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-label="Benefits to using dbExpression"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-x-24 mx-8 md:mx-16 lg:mx-24">
        {features.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-y-6 pb-24 lg:pb-0">
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
