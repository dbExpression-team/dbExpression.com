import Link from 'next/link'
import { NavLink } from '@/components/NavLink'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'

export function Footer() {
  const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pt-12">
      <Container>
        <div className="flex justify-center dark:hidden">
          <Logo className="mx-auto w-auto" width="200" height="200" />
        </div>
        <div className="flex hidden dark:block">
            <Logo className="mx-auto w-auto" width="200" height="200" isDark="true" />
        </div>
        <div className="flex flex-grow justify-center mt-8 pb-12 md:pb-16">
            <p className="text-base font-medium text-slate-600 dark:text-slate-300 text-center"><span className="pr-4">Fluent SQL</span>|<span className="pl-4">.NET ORM</span></p>
        </div>
        <div className="flex flex-grow justify-center pb-12 md:pb-16">
          <Button href="/docs" color="blue" className="rounded-md"><span className='p-1 text-lg'>Get started</span></Button>
        </div>
        <div className="grid grid-cols-2 items-center border-t border-slate-400/10 py-4 sm:flex-row sm:justify-between">
          <div>
            <p className="mt-6 text-sm text-slate-500 sm:mt-0">
              Copyright &copy; {new Date().getFullYear()} dbExpression. All rights
              reserved.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="hidden md:block">
              <NavLink href="#benefits" className="hover:text-slate-800">Why dbExpression?</NavLink>
            </div>
            <div className="hidden md:block">
              <NavLink href="#features" className="hover:text-slate-800">How will it help me?</NavLink>
            </div>
            <div className="hidden md:block">
              <NavLink href="/docs" className="hover:text-slate-800" alt="Read the Docs" aria-label="Read the Docs">Read the Docs</NavLink>
            </div>
            <div className="ml-12">
              <Link
                href="https://github.com/dbexpression-team/dbExpression"
                className="group"
                aria-label="dbExpression on GitHub"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
