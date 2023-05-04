import { parseISO, differenceInYears } from 'date-fns'
import Appsignal from '@appsignal/javascript'

let appsignal

export default {
  async fetch(request, env, ctx) {
    // instantiate AppSignal only when it hasn't been instantiated
    if (!appsignal) {
      appsignal = new Appsignal({ key: env.APPSIGNAL_API })
    }

    if (request.method === 'POST') {
      return handlePostRequest(request)
    } else {
      return handleGetRequest(request)
    }
  },
}

/**
 * Respond with 'Hello worker!' text
 * @param {Request} request
 */
async function handleGetRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}

/**
 * Respond with 'Hello, {name}. You are ${age} years old!' in json
 * @param {Request} request
 */
async function handlePostRequest(request) {
  try {
    const body = await request.json()
    const { name, dob } = body
    // Calculate age
    const dobDate = parseISO(dob)
    const today = new Date()
    const age = differenceInYears(today, dobDate)
    const data = JSON.stringify({
      message: `Hello, ${name}. You are ${age} years old!`,
    })
    return new Response(data, {
      headers: { 'content-type': 'application/json' },
    })
  } catch (error) {
    return handleError(error, {
      category: 'Backend',
      action: 'handlePostRequest',
      metadata: {
        fileName: 'index.js',
        message: error.message,
        foo: 'bar',
      },
    })
  }
}

function handleError(error, breadcrumb) {
  appsignal.addBreadcrumb(breadcrumb)
  appsignal.sendError(error)
  return new Response(error, {
    headers: { 'content-type': 'text/plain' },
    statusText: error,
    status: 500,
  })
}
