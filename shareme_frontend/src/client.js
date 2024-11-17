import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '4ef0a53r', // Replace this with your actual projectId
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: false,
  token: 'skY2O6cmMlexy7UXzdlbYWX4REwNqhA2eKCbmZlRjp4DKWRgwkTCB80FvqvMKNGScfbYz6IWYJ58Nq22Xa1dqhowgY11iqORw1t7aLpghNxklsD0johvrsyIoBsEyHuuYaEw71etDmWxFJfKXkrx4dqW4jbVbkIOwggmvXq6hvMHbQxXGjST', // Replace this with your actual token
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
