class FuncRunner {
  constructor(func, context=null) {
    this.func = func
    this.context = context
  }

  call(context, ...args) {
    this.args = [...args]
    if (isFunc(this.func)) {
      this.func.call(context, ...args)  
    } else {
      setTimeout(() => {
        this._elseCall()  
      }, 0)
    }
    return this
  }

  else(defaultFunc) {
    this.defaultFunc = defaultFunc
    return this
  }

  _elseCall() {
    if (isFunc(this.defaultFunc)) {
      this.defaultFunc.apply(this.context, this.args)
    } else {
      throw new Error("[Error in isFunc] Function: else's arguments is not a function")
    }
  }
}

export default function ifFunc(func, context) {
  return new FuncRunner(func, context)   
}

// helper
function isFunc(func) {
  return Object.prototype.toString.call(func) === '[object Function]' && typeof(func) === 'function'         
}
