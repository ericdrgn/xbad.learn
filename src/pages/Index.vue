<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="80" />
          <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
          
          </h2>
        </div>
        <h1 class="text-4xl text-center lg:text-5xl">
          Documentation &amp; Learning Center. Done Right.
        </h1>
        <p class="text-xl font-medium text-center">
          [x] by a dragon, use this as a resource to learn how to use what we offer as well as some tips to get started yourself.
          <br>
          <strong class="text-ui-primary">Control your [x].</strong>
        </p>

       

        <div class="flex justify-center mt-8">
          <g-link
            to="/learn/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold font-black leading-none text-gray border rounded-lg shadow-lg border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Learn
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center">
          Find your [x]. <span class="border-b border-dashed border-ui-primary text-ui-primary">After all, it's who you are.</span>.
        </p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <BookOpenIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Curious how we do [x]?
          </h3>
          <p class="text-lg text-left">
            Don't lose track of anything. As we continue to build out our projects we will continue to share details with you here. We believe in collective success. <span class="border-b border-dashed border-ui-primary text-ui-primary">Seriously</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <XIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            [x] B. A. D.
          </h3>
          <p class="text-lg text-left">
            [x] is whatever you want it to be. Insert your dream, idea, etc into [x] and we will make it happen. <span class="border-b border-dashed border-ui-primary text-ui-primary">[x] By A Dragon</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <MailIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Reach Out
          </h3>
          <p class="text-lg text-left">
            Still have questions? Shoot us an <a href='mailto:hello@drgn.email' style='text-decoration: underline;color: #fff'>email</a>.
          </p>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, BookOpenIcon, CodeIcon, MailIcon, XIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    BookOpenIcon,
    CodeIcon,
    MailIcon,
    XIcon
  },

  metaInfo() {
     const title = 'By a Dragon Learning';
    const description = '[x] by a dragon provides systems and services across a wide range of areas. Have a dream? We make it happen.';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
