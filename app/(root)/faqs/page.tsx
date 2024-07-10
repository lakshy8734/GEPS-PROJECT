import VerticalAccordion from '@/components/FAQ'
import React from 'react'

const page = () => {
  return (
    <>
      <h3 className="!mt-8 mx-auto items-center text-center font-bold text-4xl mb-2">Frequently Asked Questions</h3>
      <h4 className="text-muted-foreground font-medium text-2xl mx-auto items-center text-center mb-4">
        Can&apos;t find the answer you&apos;re looking for? Reach out to our
        customer support team.
      </h4>
      <VerticalAccordion/>
    </>
  )
}

export default page