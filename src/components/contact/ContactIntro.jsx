import React from 'react'
import { CentralTitle } from '../../global'

const ContactIntro = () => {
  return (
    <section className='m-auto max-w-[80%] lg:max-w-[40%]'>
      <CentralTitle title={'Send us the dirt!'} />
      <div className='flex flex-col gap-10 lg:gap-16 justify-start items-start'>
        <div className='flex flex-col items-start justify-start'>
          <h2 className='text-start text-2xl font-bold'>Online Orders</h2>
          <p className='pt-2 text-sm leading-6'>
            If you have any questions about your online order,{' '}
            <a
              href='#contact'
              className='font-sans text-green-600 hover:text-green-500 duration-500'
            >
              send us an email
            </a>{' '}
            or send us a note through the submission box below. Please include
            your order number and necessary information to resolve your issue.
            <br />
            <br />
            Our customer service team is available every Monday through Friday
            from 10 am till 6 pm PST. Please give us 1-2 business days to get
            back to you. <br /> <br /> You can also read our{' '}
            <a
              href='#contact'
              className='font-sans text-green-600 hover:text-green-500 duration-500'
            >
              Frequently Asked Questions
            </a>
            .
          </p>
        </div>

        <div className='flex flex-col items-start justify-start'>
          <h2 className='text-start text-2xl font-bold'>Plant Care Help</h2>
          <p className='pt-2 text-sm leading-6'>
            We love talking plants! Give us the dirt every Monday through Friday
            by emailing our{' '}
            <a
              href='#'
              className='font-sans text-green-600 hover:text-green-500 duration-500'
            >
              Plant Care team
            </a>{' '}
            for any plant health-related questions. You can also join our{' '}
            <a
              href='#'
              className='font-sans text-green-600 hover:text-green-500 duration-500'
            >
              Facebook Community Group{' '}
            </a>
            to discuss anything house plant-related.
          </p>
        </div>

        <div className='flex flex-col items-start justify-start'>
          <h2 className='text-start text-2xl font-bold'>
            Partnership Inquiries{' '}
          </h2>
          <p className='pt-2 text-sm leading-6'>
            Email our{' '}
            <a
              href='#'
              className='font-sans text-green-600 hover:text-green-500 duration-500'
            >
              marketing team
            </a>{' '}
            for partnership or collaboration inquiries. <br />
            <br />
            Email{' '}
            <a
              href='#'
              className='font-sans text-green-600 hover:text-green-500 duration-500'
            >
              our merchandising team{' '}
            </a>{' '}
            for product requests or if you're a supplier looking to feature your
            product within our network.
          </p>
        </div>

        <div className='flex flex-col items-start justify-start'>
          <h2 className='text-start text-2xl font-bold'>Trade Inquiries </h2>
          <p className='pt-2 text-sm leading-6'>
            We operate wholesale and dropshipping services for businesses of all
            sizes. Email our{' '}
            <a
              href='#'
              className='font-sans text-green-600 hover:text-green-500 duration-500'
            >
              wholesale team
            </a>{' '}
            for wholesale, gifting, and dropshipping inquiries.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactIntro

