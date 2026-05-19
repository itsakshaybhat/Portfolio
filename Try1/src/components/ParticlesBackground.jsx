import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className="particles-background" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      background: '#fff'
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: false },
              resize: true
            }
          },
          particles: {
            color: { value: '#e0e0e0' },
            links: { enable: false },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'out' },
              random: true,
              speed: 0.2,
              straight: false
            },
            number: {
              density: { enable: true, area: 1200 },
              value: 25
            },
            opacity: { value: 0.25 },
            shape: { type: 'circle' },
            size: { value: { min: 2, max: 4 } }
          },
          detectRetina: true
        }}
      />
    </div>
  )
}

export default ParticlesBackground