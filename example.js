function _ret(prop) {
  let s = prop.split(".")
  let i = window[s[0]]
  s.shift()
  for (const v of Object.values(s)) {
    i = i[v]
  }
  return i
}

let gd = {
  program: null,
  data: {}
}

class _$hlprogram {
  constructor() {
    this.fields = {}
  }
  
  push(setter) {
    for (const e of Object.entries(this.fields)) {
      setter.set(e[0], e[1])
    }
  }
  
  name(s) {
    this.fields.name = s
  }
  
  auto(n,v) {
    this.fields[n] = v
  }
}
const hl = {
  Program: _$hlprogram
}
const _gd_is = p => gd.program = p
const _gd_efields = p => {
  return {
    fvm(f, ...d) {
      gd.program[f](...d)
    },
    
    push(objsetter) {
      gd.program.push(objsetter)
    }
  }
}

class Objsetter {
  constructor(on) {
    this.on = on
  }
  
  set(f,v) {
    this.on[f] = v
  }
}

const _global_objsetter = new Objsetter(gd.data)

const _gd_efieldsg = () => {
  return {
    fvm(f, ...d) {
      gd.program[f](...d)
    },
    
    push(objsetter) {
      gd.program.push(objsetter)
    }
  }
}

function _gd_ddisplay() {
  let ss = ""
  console.log(Date())
  Object.entries(gd.data).forEach(e => {
    ss += e[0] + ":" + " " + e[1] + "\n"
  })
  console.log(ss)
}

//end
_gd_is(new hl.Program())
const f = _gd_efieldsg()
f.fvm("name", "Example Hack")
f.fvm("auto", "By", "qaiik")
f.push(_global_objsetter)
_gd_ddisplay()
