export const metadata = {
  title: 'Maths Learning - Easy Math Calculator & Tutorials',
  description: 'Learn maths easily with step-by-step solutions, notebook-style calculations, and interactive math tools for students of all levels.',
  keywords: 'maths learning, math calculator, step by step math, notebook style math, online maths tutorials, arithmetic, algebra, BODMAS',
  author: 'Jaydeep Kotak',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    url: 'https://maths-learning-olive.vercel.app/',
    title: 'Maths Learning - Easy Math Calculator & Tutorials',
    description: 'Learn maths easily with step-by-step solutions, notebook-style calculations, and interactive math tools for students of all levels.',
    images: [
      {
        url: 'https://maths-learning-olive.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Maths Learning'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maths Learning - Easy Math Calculator & Tutorials',
    description: 'Learn maths easily with step-by-step solutions, notebook-style calculations, and interactive math tools for students of all levels.',
    images: ['https://maths-learning-olive.vercel.app/og-image.png']
  },
  icons: {
    icon: '/favicon.ico'
  },
  canonical: 'https://maths-learning-olive.vercel.app/'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
