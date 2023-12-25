import ApplicationController from "controllers/application_controller"

export default class extends ApplicationController {
  connect () {
    super.connect()
  }

  // beforeMakeLive(element, reflex, noop, id) {
  //  console.log("before make_live", element, reflex, id)
  // }

  // makeLiveQueued(element, reflex, noop, id) {
  //   console.log("make_live enqueued for delivery upon connection", element, reflex, id)
  // }

  // makeLiveDelivered(element, reflex, noop, id) {
  //   console.log("make_live delivered to the server", element, reflex, id)
  // }

  // makeLiveSuccess(element, reflex, noop, id) {
  //   console.log("make_live successfully executed", element, reflex, id)
  // }

  // makeLiveError(element, reflex, error, id) {
  //   console.error("make_live server-side error", element, reflex, error, id)
  // }

  // makeLiveHalted(element, reflex, noop, id) {
  //   console.warn("make_live halted before execution", element, reflex, id)
  // }

  // makeLiveForbidden(element, reflex, noop, id) {
  //   console.warn("make_live forbidden from executing", element, reflex, id)
  // }

  // afterMakeLive(element, reflex, noop, id) {
  //   console.log("make_live has been executed by the server", element, reflex, id)
  // }

  // finalizeMakeLive(element, reflex, noop, id) {
  //   console.log("make_live changes have been applied", element, reflex, id)
  // }
}
