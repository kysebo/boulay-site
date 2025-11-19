export default function Footer() {
  return (
    <footer className="bg-[#fafafa] text-[#111]">
      <div className="max-w-[800px] mx-auto md:mx-0 md:ml-4 px-8 pb-8">
        <div className="border-t border-neutral-200 pt-6">
          <p className="font-mono text-sm text-neutral-600">
            Kyle Boulay · boulay.me · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
