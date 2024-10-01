// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  lexicalEditor,
  InlineToolbarFeature,
  FixedToolbarFeature,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Articles } from './collections/Articles'
import { Tags } from './collections/Tags'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  i18n: {
    fallbackLanguage: 'en',
  },
  localization: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    fallback: true,
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Articles, Tags],
  editor: lexicalEditor({
    admin: { hideGutter: false },
    features: ({ defaultFeatures, rootFeatures }) => [
      ...defaultFeatures,
      ...rootFeatures,
      // InlineToolbarFeature(),
      FixedToolbarFeature(),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
