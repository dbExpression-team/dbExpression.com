import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { HeroBackground } from '@/components/HeroBackground'
import { Fragment } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import Image from 'next/image'

import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'
import dbExpressionImageDark from '@/images/logos/dark/dbex-and-icon.png'
import dbExpressionImageLight from '@/images/logos/light/dbex-and-icon.png'
import clsx from 'clsx'

import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-csharp");
require("prismjs/components/prism-sql");

const codeLanguage = 'csharp'
const code = `var rockstar = db.SelectOne(
        (dbo.Employee.Name + " " + dbo.Employee.LastName).As("Rockstar"),
		db.fx.Count(dbo.PrimaryEngineerId.Id).As("KnockedItOutOfThePark")
    )
    .From(dbo.Employee)
	.InnerJoin(dbo.Project).On(dbo.Employee.Id == dbo.Project.PrimaryEngineerId)
    .Where(dbo.Project.PeerReviewScore == PeerReviewScore.ExceededExpectations)
	.GroupBy(dbo.Project.PrimaryEngineerId)
	.OrderBy(db.fx.Count(dbo.PrimaryEngineerId.Id).Desc());
	
var you = await rockstar.ExecuteAsync();`

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden bg-sky-50 dark:bg-slate-900 dark:-mb-12 dark:mt-[-4.5rem] dark:pb-12 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-8 sm:px-2 lg:relative lg:py-12 lg:px-0">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 justify-center gap-y-16 lg:gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-7 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left col-span-2">
            <Image
              className="absolute bottom-full right-full -mr-80 -mb-64 opacity-50 border-0"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <Image
              className="border-0 mx-auto hidden dark:block"
              src={dbExpressionImageDark}
              alt="dbExpression"
              width={530}
              height={530}
              unoptimized
              priority
            />
            <Image
              className="border-0 mx-auto dark:hidden"
              src={dbExpressionImageLight}
              alt="dbExpression"
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative width text-center mt-10">			  
              <h1 className="font-display text-2xl tracking-tight text-slate-700 dark:text-slate-200 md:text-3xl">
                Microsoft SQL Server. Simplified.
              </h1>
              <p className="mt-6 text-lg md:text-xl tracking-tight text-slate-800/80 dark:text-slate-300">
                Close the gap between native SQL and application code. 
              </p>
              <div className="mt-12 justify-center">
                <Button href="/docs" color="blue" className="rounded-md"><span className='p-2 text-lg'>Get started &rarr;</span></Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10 col-span-5">
            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%] hidden lg:visible lg:block" />
            </div>
            <div className="relative">
              <Image
                className="absolute hidden lg:visible -top-64 -right-64 border-0"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute hidden lg:visible -bottom-40 -right-44 border-0"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg max-w-screen-2xl" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 max-w-screen-2xl" />
              <div className="relative rounded-2xl bg-[#1e293b]/90 dark:bg-[#0A101F]/90 ring-1 ring-white/10 backdrop-blur w-full max-w-screen-2xl hidden lg:visible lg:block">
                <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
                <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
                <div className="pl-4 pt-4 ">
                  <TrafficLightsIcon className="h-2.5 w-auto stroke-slate-200/40 dark:stroke-slate-00/30" />
                  <div className="mt-6 flex items-start px-1 text-sm">
                    <div
                      aria-hidden="true"
                      className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600"
                    >
                      {Array.from({
                        length: code.split('\n').length,
                      }).map((_, index) => (
                        <Fragment key={index}>
                          {(index + 1).toString().padStart(2, '0')}
                          <br />
                        </Fragment>
                      ))}
                    </div>
                    <Highlight
                      {...defaultProps}
                      code={code}
                      language={codeLanguage}
                      theme={undefined}
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          className={clsx(
                            className,
                            'flex overflow-x-auto pb-6 text-sm'
                          )}
                          style={style}
                        >
                          <code className="px-4">
                            {tokens.map((line, lineIndex) => (
                              <div key={lineIndex} {...getLineProps({ line })}>
                                {line.map((token, tokenIndex) => (
                                  <span
                                    key={tokenIndex}
                                    {...getTokenProps({ token })}
                                  />
                                ))}
                              </div>
                            ))}
                          </code>
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
