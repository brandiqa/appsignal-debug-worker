import { parseISO, differenceInYears } from 'date-fns'
import Appsignal from '@appsignal/javascript'

const appsignal = new Appsignal({ key: '3c5510c0-c5a3-472b-8c29-d3d9f04e9f27' })

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === 'POST') {
    return handlePostRequest(request)
  } else {
    return handleGetRequest(request)
  }
}

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleGetRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}

/**
 * Respond with Hello, {name}! json
 * @param {Request} request
 */
// async function handlePostRequest(request) {
//   try {
//     const body = await request.json()
//     const { name } = body
//     const data = JSON.stringify({
//       message: `Hello, ${name}!`,
//     })
//     return new Response(data, {
//       headers: { 'content-type': 'application/json' },
//     })
//   } catch (error) {
//     appsignal.sendError(error)
//     console.log(error)
//   }
// }

async function handlePostRequest(request) {
  try {
    const data = await appsignal.wrap(async () => {
      const body = await request.json()
      const { name, dob } = body
      // Calculate age
      const dobDate = parseISO(dob)
      const today = new Date()
      const age = differenceInYears(today, dobDate)
      return JSON.stringify({
        message: `Hello, ${name}. You are ${age} years old!`,
      })
    })
    return new Response(data, {
      headers: { 'content-type': 'application/json' },
    })
  } catch (error) {
    console.log(error)
    return new Response(error, {
      headers: { 'content-type': 'text/plain' },
      statusText: error,
      status: 500,
    })
  }
}
