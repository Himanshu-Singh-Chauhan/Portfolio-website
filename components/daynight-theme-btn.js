import { useState, useEffect } from 'react'
import { useColorMode } from '@chakra-ui/react'

let gsap = require('gsap/dist/gsap').gsap
const { to, fromTo, set } = gsap

function getPoint(point, i, a, smoothing) {
  let cp = (current, previous, next, reverse) => {
      let p = previous || current,
        n = next || current,
        o = {
          length: Math.sqrt(
            Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)
          ),
          angle: Math.atan2(n[1] - p[1], n[0] - p[0])
        },
        angle = o.angle + (reverse ? Math.PI : 0),
        length = o.length * smoothing
      return [
        current[0] + Math.cos(angle) * length,
        current[1] + Math.sin(angle) * length
      ]
    },
    cps = cp(a[i - 1], a[i - 2], point, false),
    cpe = cp(point, a[i - 1], a[i + 1], true)
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`
}

function getPath(update, smoothing) {
  let points = [
      [4, 18],
      [26, update],
      [48, 18]
    ],
    d = points.reduce(
      (acc, point, i, a) =>
        i === 0
          ? `M ${point[0]},${point[1]}`
          : `${acc} ${getPoint(point, i, a, smoothing)}`,
      ''
    )
  return `<path d="${d}" />`
}

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  const [clientready, setClientReady] = useState(false)

  useEffect(() => {
    setClientReady(true)
  }, [])

  useEffect(() => {
    document.querySelectorAll('.day-night').forEach(dayNight => {
      console.log(dayNight)
      let toggle = dayNight.querySelector('.toggle'),
        svgLine = dayNight.querySelector('.line'),
        svgLineProxy = new Proxy(
          {
            y: null
          },
          {
            set(target, key, value) {
              target[key] = value
              if (target.y !== null) {
                svgLine.innerHTML = getPath(target.y, 0.1925)
              }
              return true
            },
            get(target, key) {
              return target[key]
            }
          }
        )

      svgLineProxy.y = 18

      toggle.addEventListener('click', e => {
        e.preventDefault()

        if (dayNight.classList.contains('animate')) {
          return
        }
        dayNight.classList.add('animate')

        let night = dayNight.classList.contains('night')

        to(dayNight, {
          keyframes: [
            {
              [night ? '--moon-y' : '--sun-y']: '-4px',
              duration: 0.25
            },
            {
              [night ? '--moon-y' : '--sun-y']: '60px',
              duration: 0.2
            },
            {
              [night ? '--sun-y' : '--moon-y']: '-4px',
              duration: 0.25,
              delay: 0.275,
              onStart() {
                to(dayNight, {
                  '--new-percent': '100%',
                  '--line': night ? 'var(--day-line)' : 'var(--night-line)',
                  duration: 0.5
                })
              }
            },
            {
              [night ? '--sun-y' : '--moon-y']: '0px',
              duration: 0.5,
              ease: 'elastic.out(1, .5)',
              clearProps: true,
              onComplete() {
                if (night) {
                  dayNight.classList.remove('night')
                } else {
                  dayNight.classList.add('night')
                }
                dayNight.classList.remove('animate')
              }
            }
          ]
        })

        to(svgLineProxy, {
          keyframes: [
            {
              y: 24,
              delay: 0.25,
              duration: 0.2
            },
            {
              y: 12,
              duration: 0.2
            },
            {
              y: 24,
              duration: 0.25
            },
            {
              y: 18,
              duration: 0.5,
              ease: 'elastic.out(1, .5)'
            }
          ]
        })
      })
    })
  }, [clientready])

  return (
    <div className="day-night">
      <button className="toggle" onClick={toggleColorMode}>
        <div>
          <svg className="sun" viewBox="0 0 24 24">
            <g className="lines">
              <line x1="1" y1="12" x2="2" y2="12" />
              <line x1="4.2" y1="4.2" x2="4.9" y2="4.9" />
              <line x1="12" y1="1" x2="12" y2="2" />
              <line x1="19.8" y1="4.2" x2="19.1" y2="4.9" />
              <line x1="23" y1="12" x2="22" y2="12" />
              <line x1="19.8" y1="19.8" x2="19.1" y2="19.1" />
              <line x1="12" y1="23" x2="12" y2="22" />
              <line x1="4.2" y1="19.8" x2="4.9" y2="19.1" />
            </g>
            <circle cx="12" cy="12" r="6" />
          </svg>
          <svg className="moon" viewBox="0 0 24 24">
            <path d="M18,16C12.5,16,8,11.5,8,6 c0-0.9,0.1-1.8,0.4-2.6C4.1,4.5,1,8.4,1,13c0,5.5,4.5,10,10,10c4.6,0,8.5-3.1,9.6-7.4C19.8,15.9,18.9,16,18,16z" />
            <g className="star-1">
              <line x1="15" y1="1" x2="15" y2="5" />
              <line x1="13" y1="3" x2="17" y2="3" />
            </g>
            <g className="star-2">
              <line x1="21" y1="7" x2="21" y2="11" />
              <line x1="19" y1="9" x2="23" y2="9" />
            </g>
          </svg>
        </div>
        <svg className="line" viewBox="0 0 52 36"></svg>
      </button>
    </div>
  )
}

export default ThemeToggleButton
