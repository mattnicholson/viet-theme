class Iterator {
	ix = 0
	list = []
	constructor(arr) {
		this.list = arr
	}
	current = () => {
		return this.list[this.ix]
	}
	next = () => {
		if (this.isLast()) {
			return this.first()
		}
		this.ix++
		return this.current()
	}
	prev = () => {
		if (this.isFirst()) {
			return this.last()
		}

		this.ix--
		return this.current()
	}
	isFirst = () => {
		return this.ix === 0
	}
	first = () => {
		this.ix = 0
		return this.current()
	}
	isLast = () => {
		return this.ix === this.list.length - 1
	}
	last = () => {
		this.ix = this.list.length - 1
		return this.current()
	}
}

export { Iterator }
