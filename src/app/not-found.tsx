import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="mb-8">Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 bg-foreground text-background rounded-full">
        Return Home
      </Link>
    </div>
  )
}
