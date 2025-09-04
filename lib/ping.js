'use strict'

class SPPing {
	constructor(mod) {
		this.min = this.max = this.avg = 0
		this.history = []

		let timeout = null,
			waiting = false,
			lastSent = 0,
			debounce = false

		// Batch ping requests to reduce network traffic
		let pendingPings = 0
		const maxPendingPings = 3 // Don't allow more than 3 pending pings
		
		const ping = () => {
			clearTimeout(timeout)
			
			// Only send ping if we don't have too many pending
			if (pendingPings < maxPendingPings) {
				mod.send('C_REQUEST_GAMESTAT_PING', 1)
				waiting = true
				lastSent = Date.now()
				pendingPings++
			}
			
			// Increase timeout if we have pending pings to reduce network congestion
			const adjustedTimeout = mod.settings.ping.timeout * (1 + (pendingPings * 0.5))
			timeout = setTimeout(ping, adjustedTimeout)
		}

		mod.hook('S_SPAWN_ME', 'raw', () => {
			clearTimeout(timeout)
			timeout = setTimeout(ping, mod.settings.ping.interval)
		})

		mod.hook('S_LOAD_TOPO', 'raw', () => { clearTimeout(timeout) })
		mod.hook('S_RETURN_TO_LOBBY', 'raw', () => { clearTimeout(timeout) })

		// Disable inaccurate ingame ping so we have exclusive use of ping packets
		mod.hook('C_REQUEST_GAMESTAT_PING', 'raw', () => {
			mod.send('S_RESPONSE_GAMESTAT_PONG', 1)

			if(!debounce && (debounce = true)) mod.command.exec('sp ping') // Display accurate ping statistics in chat

			return false
		})

		mod.hook('S_RESPONSE_GAMESTAT_PONG', 'raw', () => {
			const result = Date.now() - lastSent

			clearTimeout(timeout)
			debounce = false
			
			// Decrement pending pings counter
			pendingPings = Math.max(0, pendingPings - 1)

			if(!waiting) this.history.pop() // Oops! We need to recalculate the last value

			this.history.push(result)

			if(this.history.length > mod.settings.ping.maxHistory) this.history.shift()

			// Recalculate statistics variables
			this.min = this.max = this.history[0]
			this.avg = 0

			for(let p of this.history) {
				if(p < this.min) this.min = p
				else if(p > this.max) this.max = p

				this.avg += p
			}

			this.avg /= this.history.length

			waiting = false
			
			// Use a longer interval if we have pending pings to reduce network congestion
			const adjustedInterval = mod.settings.ping.interval * (1 + (pendingPings * 0.5))
			timeout = setTimeout(ping, Math.max(adjustedInterval - result, 1000))
			return false
		})
	}
}

module.exports = SPPing