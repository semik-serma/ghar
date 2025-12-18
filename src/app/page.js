'use client'

import Navbar from "@/components/Navbar"
import Newbutton from "@/components/ReadMoreButton"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

const images = [
  "https://thumbs.dreamstime.com/b/coding-workspace-illuminated-night-multiple-screens-programmer-setup-creating-tech-office-environment-dark-theme-372948424.jpg",
  "https://thumbs.dreamstime.com/b/hands-typing-blue-backlit-mechanical-keyboard-gaming-coding-close-up-shot-capturing-person-s-rapidly-modern-397958659.jpg",
  "https://thumbs.dreamstime.com/b/cyberpunk-workspace-multiple-computer-screens-neon-lighting-dark-room-several-illuminated-red-green-lights-367839990.jpg",
]

export default function Page() {
  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  )

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* FULLSCREEN AUTO SLIDER */}
      <Carousel
        className="absolute inset-0 z-0"
        plugins={[autoplay.current]}
      >
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`Pro coding background ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 z-20" />
        <CarouselNext className="right-4 z-20" />
      </Carousel>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* CONTENT ON TOP */}
      <div className="relative z-20 h-full flex flex-col">
        <Navbar />

        <div className="flex-1 flex items-center justify-center px-8">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-white">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold">Hi, I am a web developer</h1>
                <p className="text-xl md:text-2xl">My name is Semik and I am a developer</p>
              </div>
              <Newbutton />
            </div>

            <div className="flex justify-center">
              <Image
                src="/myphoto.png"
                width={400}
                height={400}
                alt="Semik - Professional Web Developer"
                className="rounded-full border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}