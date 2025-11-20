'use client'

import { useState, useEffect } from 'react'
import { DesignTuner } from '@subframe/components/DesignTuner'

type Font = 'mono' | 'sans'
type Density = 'comfortable' | 'compact'
type Width = 'narrow' | 'default' | 'wide'

interface TunerState {
  font: Font
  density: Density
  width: Width
  rememberOnDevice: boolean
}

const STORAGE_KEY = 'frontend-design-tuner-v1'

function getFontClass(font: Font): string {
  return font === 'mono' ? 'font-mono' : 'font-sans'
}

function getWidthClass(width: Width): string {
  switch (width) {
    case 'narrow':
      return 'max-w-[560px]'
    case 'default':
      return 'max-w-[700px]'
    case 'wide':
      return 'max-w-[820px]'
  }
}

function getDensityClass(density: Density): string {
  return density === 'comfortable'
    ? 'space-y-8 md:space-y-10'
    : 'space-y-5 md:space-y-7'
}

interface OptionButtonProps {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
}

function OptionButton({ selected, onClick, children }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs rounded transition-colors cursor-pointer ${
        selected
          ? 'bg-neutral-200 text-neutral-900'
          : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-150'
      }`}
    >
      {children}
    </button>
  )
}

interface DesignTunerContainerProps {
  children: (props: { openTuner: () => void; density: Density; font: Font }) => React.ReactNode
}

export default function DesignTunerContainer({
  children,
}: DesignTunerContainerProps) {
  const [font, setFont] = useState<Font>('mono')
  const [density, setDensity] = useState<Density>('comfortable')
  const [width, setWidth] = useState<Width>('wide')
  const [rememberOnDevice, setRememberOnDevice] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const data: TunerState = JSON.parse(saved)
        setFont(data.font)
        setDensity(data.density)
        setWidth(data.width)
        setRememberOnDevice(data.rememberOnDevice)
      }
    } catch {
      // Ignore errors
    }
  }, [])

  // Save to localStorage when state changes
  useEffect(() => {
    if (rememberOnDevice) {
      try {
        const data: TunerState = { font, density, width, rememberOnDevice }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      } catch {
        // Ignore errors
      }
    }
  }, [font, density, width, rememberOnDevice])

  const fontOptions = (
    <div className="flex gap-2">
      <OptionButton selected={font === 'mono'} onClick={() => setFont('mono')}>
        Mono
      </OptionButton>
      <OptionButton selected={font === 'sans'} onClick={() => setFont('sans')}>
        Sans
      </OptionButton>
    </div>
  )

  const densityOptions = (
    <div className="flex gap-2">
      <OptionButton
        selected={density === 'comfortable'}
        onClick={() => setDensity('comfortable')}
      >
        Comfortable
      </OptionButton>
      <OptionButton
        selected={density === 'compact'}
        onClick={() => setDensity('compact')}
      >
        Compact
      </OptionButton>
    </div>
  )

  const widthOptions = (
    <div className="flex gap-2">
      <OptionButton
        selected={width === 'narrow'}
        onClick={() => setWidth('narrow')}
      >
        Narrow
      </OptionButton>
      <OptionButton
        selected={width === 'default'}
        onClick={() => setWidth('default')}
      >
        Default
      </OptionButton>
      <OptionButton selected={width === 'wide'} onClick={() => setWidth('wide')}>
        Wide
      </OptionButton>
    </div>
  )

  const rememberCheckbox = (
    <label className="flex items-center gap-2 text-xs text-neutral-600 cursor-pointer">
      <input
        type="checkbox"
        checked={rememberOnDevice}
        onChange={(e) => setRememberOnDevice(e.target.checked)}
        className="rounded border-neutral-300"
      />
      Remember on this device
    </label>
  )

  const closeButton = (
    <button
      onClick={() => setIsOpen(false)}
      className="font-mono text-xs text-neutral-500 hover:text-neutral-700 cursor-pointer"
    >
      × Close
    </button>
  )

  const openTuner = () => setIsOpen(true)

  return (
    <>
      <div
        className={`${getWidthClass(width)} ${getDensityClass(density)} mx-auto md:mx-0 md:ml-4 px-8 py-16`}
      >
        {children({ openTuner, density, font })}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-80 bg-[#fafafa] shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <DesignTuner
            closeButton={closeButton}
            title={
              <span className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600">
                Tuning
              </span>
            }
            previewLabel={
              <div className="md:hidden flex flex-col gap-3 pb-4 border-b border-neutral-200 mb-4">
                <div>
                  <span className={`${font === 'mono' ? 'font-mono' : 'font-sans'} text-lg font-medium text-neutral-700`}>
                    Example title text
                  </span>
                </div>
                <div className={`${width === 'narrow' ? 'max-w-[280px]' : width === 'wide' ? 'max-w-full' : 'max-w-[320px]'}`}>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    This is example body text to preview how density and width affect readability.
                  </p>
                </div>
              </div>
            }
            fontLabel="Titles"
            fontOptions={fontOptions}
            densityLabel="Density"
            densityOptions={densityOptions}
            widthLabel="Width"
            widthOptions={widthOptions}
            rememberCheckbox={rememberCheckbox}
            disclaimerText="Preferences are stored locally in your browser (no tracking)."
          />
        </div>
      </div>
    </>
  )
}
